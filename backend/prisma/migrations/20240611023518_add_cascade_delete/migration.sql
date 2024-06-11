-- DropForeignKey
ALTER TABLE "avatar" DROP CONSTRAINT "avatar_userId_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_userId_fkey";

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar" ADD CONSTRAINT "avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
