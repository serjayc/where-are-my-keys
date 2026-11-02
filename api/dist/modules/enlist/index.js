import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { userSchema } from "../user/schema.js";
import { enlistService } from "./service.js";
export const enlistModule = new Hono();
enlistModule.post("/", zValidator("json", userSchema), async (c) => {
    try {
        const data = c.req.valid("json");
        const res = await enlistService.create(data.email, data);
        return c.json(res, 201);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Already enlisted") {
            return c.json({ message: error.message }, 409);
        }
        return c.json({ message: "Internal server error" }, 500);
    }
});
