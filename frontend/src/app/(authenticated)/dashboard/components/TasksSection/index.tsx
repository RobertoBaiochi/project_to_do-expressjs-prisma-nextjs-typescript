import { getAllTasksUser } from "@/services/api-requests/get-all-tasks-user";
import styles from "./tasks.module.css";
import { TasksColumns } from "../TasksColumns";

export const TasksSection = async () => {
    const todoTask = await getAllTasksUser();
    const doingTask = await getAllTasksUser();
    const doneTask = await getAllTasksUser();

    return (
        <section className={styles.section_container}>
            <TasksColumns title="🎯 To-do" tasks={todoTask} />
            <TasksColumns title="🚀 Doing" tasks={doingTask} />
            <TasksColumns title="🔥 Done" tasks={doneTask} />
        </section>
    );
};
