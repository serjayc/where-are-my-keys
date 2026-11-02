import { prisma } from "../../lib/prisma.js";

export const enlistRepository = {
  create(userId: string) {
    return prisma.enlist.create({ data: { userId } });
  },
  findByEmail(email: string) {
    return prisma.enlist.findFirst({
      where: {
        user: {
          email,
        },
      },
    });
  },
};
