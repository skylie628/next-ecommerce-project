import Redis from "ioredis";
const { REDIS_URL } = process.env;
if (!REDIS_URL) {
  throw new Error(
    "Unable to connect to Redis, please check .env file and make sure you define environment"
  );
}
export const redis = new Redis(REDIS_URL as string);
