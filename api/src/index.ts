import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { enlistModule } from "./modules/enlist/index.js";
import { cors } from "hono/cors";

const port = 4000;

const app = new Hono();

app.use(
  "*",
  cors({
    origin: [
      String(process.env.CLIENT_URL),
      String(process.env.CLIENT_ACTIVE_URL),
    ],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/enlist", enlistModule);

// serve(
//   {
//     fetch: app.fetch,
//     port,
//   },
//   (info) => {
//     console.log(`Server is running on http://localhost:${info.port}`);
//   },
// );

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
