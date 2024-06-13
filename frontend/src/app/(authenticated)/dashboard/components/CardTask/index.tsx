import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./cardtask.module.css";

export const CardTask = (task: ResponseTaskModel) => {
    return (
        <li className={styles.card_container} draggable>
            <input
                type="checkbox"
                className={styles.input_check}
                id={task.id}
            />
            <label htmlFor={task.id} className={styles.label}>
                {task.title}
            </label>
        </li>
    );
};
