import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { enlistModule } from "./modules/enlist/index.js";

const app = new Hono();

const allowedOrigins = [
  "http://localhost:3000",
  "https://where-are-my-keys.vercel.app",
];

app.use(
  "*",
  cors({
    origin: allowedOrigins,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/enlist", enlistModule);

const port = Number(process.env.PORT) || 4000;

serve(
  {
    fetch: app.fetch,
    port,
    hostname: "0.0.0.0",
  },
  (info) => console.log(`Server running on port ${info.port}`),
);
