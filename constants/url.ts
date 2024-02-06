export const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_SERVER
  ? `${process.env.NEXT_PUBLIC_SERVER}/api/graphql`
  : `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`;
