-- AlterTable
ALTER TABLE "task" ALTER COLUMN "index" SET DEFAULT 0,
ALTER COLUMN "index" DROP DEFAULT;
DROP SEQUENCE "task_index_seq";
