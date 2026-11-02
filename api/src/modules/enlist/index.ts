import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { userSchema } from "../user/schema.js";
import { enlistService } from "./service.js";

export const enlistModule = new Hono();

enlistModule.post("/", zValidator("json", userSchema), async (c) => {
  try {
    const data = c.req.valid("json");

    const res = await enlistService.create(data.email, data);

    return c.json(
      {
        success: true,
        ...res,
      },
      200,
    );
  } catch (error) {
    console.error("Enlistment error:", error);

    return c.json({ message: "Internal server error" }, 500);
  }
});
