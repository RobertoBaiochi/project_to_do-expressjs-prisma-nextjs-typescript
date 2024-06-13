import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./taskscolumns.module.css";
import { CardTask } from "../CardTask";

interface TasksColumnsProps {
    title: string;
    tasks: ResponseTaskModel[];
}

export const TasksColumns = ({ title, tasks }: TasksColumnsProps) => {
    return (
        <article className={styles.columns_container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <ul className={styles.list_container}>
                {tasks.map((task, index) => (
                    <CardTask task={task} index={index} key={task.id} />
                ))}
            </ul>
        </article>
    );
};
