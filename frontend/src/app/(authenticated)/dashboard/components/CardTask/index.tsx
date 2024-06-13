import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./cardtask.module.css";

interface CardTaskProps {
    task: ResponseTaskModel;
    index: number;
}

export const CardTask = ({ task, index }: CardTaskProps) => {
    return (
        <li className={styles.card_container} draggable>
            {task.title} - {index}
        </li>
    );
};
