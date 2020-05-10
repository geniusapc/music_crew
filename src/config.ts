export const config = {
  port2: process.env.PORT,
  port: process.env.PORT || 8000,
  sessionSecret: process.env.sessionSecret,
  clientURL: "http://localhost:3000",
  redisConnectionString: process.env.REDIS_URL || "",
  mongoDbConnString:
    process.env.MONGODB_URI || "mongodb://localhost:27017/music",
};
