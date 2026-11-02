/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `enlists` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "enlists_user_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "enlists_user_id_key" ON "enlists"("user_id");
