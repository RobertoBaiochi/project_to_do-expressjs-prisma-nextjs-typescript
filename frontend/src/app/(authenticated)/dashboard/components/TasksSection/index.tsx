import { getAllTasksUser } from "@/services/api-requests/get-all-tasks-user";
import styles from "./tasks.module.css";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { CardTask } from "../CardTask";

export const TasksSection = async () => {
    const tasks: ResponseTaskModel[] = await getAllTasksUser();

    return (
        <section className={styles.section_container}>
            <ul className={styles.list_container}>
                {tasks.map((task) => (
                    <CardTask key={task.id} {...task} />
                ))}
            </ul>
        </section>
    );
};
