import connectRedis from "connect-redis";
import session from "express-session";
import { config } from "../config";
import { redis } from "../redis";

const RedisStore = connectRedis(session);

export const sessionInit = session({
  store: new RedisStore({
    client: redis as any,
  }),
  name: "qid",
  secret: config.sessionSecret as any,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
  },
});
