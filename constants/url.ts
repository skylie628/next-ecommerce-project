export const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_SERVER
  ? `${process.env.NEXT_PUBLIC_SERVER}/api/graphql`
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`;
