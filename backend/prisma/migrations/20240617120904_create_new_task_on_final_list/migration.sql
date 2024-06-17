-- AlterTable
CREATE SEQUENCE task_index_seq;
ALTER TABLE "task" ALTER COLUMN "index" SET DEFAULT nextval('task_index_seq');
ALTER SEQUENCE task_index_seq OWNED BY "task"."index";
