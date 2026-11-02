import { prisma } from "../../lib/prisma.js";
import type { UserInput } from "../user/schema.js";
import { enlistRepository } from "./repository.js";

export const enlistService = {
  async create(email: string, data: UserInput) {
    const subscription = await enlistRepository.findByEmail(email);

    if (subscription) {
      return {
        alreadySubscribed: true,
      };
    }

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data,
      });

      const enlist = await tx.enlist.create({
        data: {
          userId: user.id,
        },
      });

      return { user, enlist };
    });

    return {
      ...result,
      alreadySubscribed: false,
    };
  },
};
