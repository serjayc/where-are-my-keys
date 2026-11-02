import { prisma } from "../../lib/prisma.js";
import { userRepository } from "../user/repository.js";
import type { UserInput } from "../user/schema.js";
import { enlistRepository } from "./repository.js";

export const enlistService = {
  async create(email: string, data: UserInput) {
    const userExists = await enlistRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Already enlisted");
    }

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data,
      });

      await tx.enlist.create({
        data: {
          userId: user.id,
        },
      });

      return { user };
    });
  },
};
