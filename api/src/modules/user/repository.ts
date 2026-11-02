import { prisma } from "../../lib/prisma.js";
import type { UserInput } from "./schema.js";

export const userRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },
  findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },
  create(data: UserInput) {
    return prisma.user.create({ data });
  },
};
