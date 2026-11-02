-- CreateTable
CREATE TABLE "enlists" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enlists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "enlists_user_id_idx" ON "enlists"("user_id");

-- AddForeignKey
ALTER TABLE "enlists" ADD CONSTRAINT "enlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
