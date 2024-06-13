import { getAllTasksUser } from "@/services/api-requests/get-all-tasks-user";
import styles from "./tasks.module.css";
import { TasksColumns } from "../TasksColumns";
import { getTasksByStatus } from "@/services/api-requests/get-tasks-by-status";

export const TasksSection = async () => {
    const todoTask = await getTasksByStatus("todo");
    const doingTask = await getTasksByStatus("doing");
    const doneTask = await getTasksByStatus("done");

    return (
        <section className={styles.section_container}>
            <TasksColumns title="🎯 To-do" tasks={todoTask} />
            <TasksColumns title="🚀 Doing" tasks={doingTask} />
            <TasksColumns title="🔥 Done" tasks={doneTask} />
        </section>
    );
};
