import { prisma } from "../../lib/prisma.js";
export const enlistRepository = {
    create(userId) {
        return prisma.enlist.create({ data: { userId } });
    },
    findByEmail(email) {
        return prisma.enlist.findFirst({
            where: {
                user: {
                    email,
                },
            },
        });
    },
};
