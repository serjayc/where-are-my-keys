import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { enlistModule } from "./modules/enlist/index.js";

const app = new Hono();

const port = Number(process.env.PORT) || 4000;

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_ACTIVE_URL,
].filter((origin): origin is string => Boolean(origin));

app.use(
  "*",
  cors({
    origin: allowedOrigins,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.route("/enlist", enlistModule);

serve(
  {
    fetch: app.fetch,
    port,
    hostname: "0.0.0.0",
  },
  (info) => {
    console.log(`Server running on port ${info.port}`);
  },
);
