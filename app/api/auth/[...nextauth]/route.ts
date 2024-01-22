import NextAuth, { NextAuthOptions, TokenSet } from "next-auth";
import { UserModel } from "@/lib/sadida/generated/mongoose/models/user.model";
import { signInWithCredentials } from "./.signInWithCredentials";
import mergeGuestToUserCart from "./.mergeGuestToUserCart";
import { signJWT, verifyJWT } from "@/lib/utils";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/lib/sadida/generated/mongoose/mongodb";
import { cookies } from "next/headers";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds unit
    updateAge: 24 * 60 * 60, // 24 hours in seconds unit
  },

  providers: [
    /*GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
      profile(profile) {
        const user = signInWithOAuth(profile);
        return user as any;
      },
    })*/
    //sign in with  username and password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "skylie@mail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log("authorize");
        const user = await signInWithCredentials(
          credentials as {
            email: string;
            password: string;
            name?: string;
          }
        );
        if (user) {
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      //user: returned value of authorize callback
      //profile: body of POST submission
      if (account?.provider === "credentials") {
        const accessToken = signJWT({ ...user }, { expiresIn: "15m" }); // 15mins
        const refreshToken = signJWT({ ...user }, { expiresIn: "1y" }); //1 year
        account.access_token = accessToken;
        account.refresh_token = refreshToken;
        account.expires_at = Math.floor(Date.now() / 1000 + 15 * 60);
      }
      ///merge cart
      //get guest's cartId from cookie
      console.log("cartId la", cookies().get("cartId"));
      const guestCartId = cookies()?.get("cartId")?.value;
      // replace guest id with cart id
      cookies().set("cartId", user?.cartId);
      await mergeGuestToUserCart({
        guestCartId,
        userCartId: user?.cartId,
      });
      return true;
    },
    //custom session return, token for jwt strategy, user for database strategy
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async jwt({ token, account, user }) {
      if (user) {
        token.role = user.role;
        token.emailVerified = user.emailVerified;
      }
      if (account) {
        // Save the access token and refresh token in the JWT on the initial login
        return {
          provider: account.provider,
          access_token: account.access_token,
          //@ts-ignore
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          ...token,
        };
        //@ts-ignore
      } else if (Date.now() < token.expires_at * 1000) {
        // If the access token has not expired yet, return it
        return token;
      } else {
        // If the access token has expired, try to refresh it
        if (token.provider === "credentials") {
          console.log("verify");
          const { decoded } = verifyJWT(token.refresh_token as string);
          console.log("verify", decoded);
          if (!decoded) {
            //if refresh token expired, logout user and delete cartItem from cookies
            cookies().delete("cartId");
            throw new Error();
          }
          await connectMongo();
          console.log("user decode la", decoded);
          const user = await UserModel.findOne({
            email: (decoded as any).email,
          });
          if (!user) throw new Error();
          const accessToken = signJWT({ ...user }, { expiresIn: "15m" });
          return {
            ...token, // Keep the previous token properties
            access_token: accessToken,
            //@ts-ignore
            expires_at: Math.floor(Date.now() / 1000 + 15 * 60),
          };
        }
      }
    },
  },
  events: {
    signOut: async (message) => {
      // remove cartId from cookie when user signout
      cookies().set("cartId", "");
      console.log("User has signed out");
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
