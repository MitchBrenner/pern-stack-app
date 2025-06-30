import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

// init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shiled protects your app from common attacks e.g. SQL injection, XSS, etc.
    shield({ mode: "LIVE" }),
    // bot detection
    detectBot({
      mode: "LIVE",
      // BLOCK all bots except search engines
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    // RATE limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});
