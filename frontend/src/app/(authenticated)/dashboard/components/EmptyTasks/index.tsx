import Image from "next/image";
import styles from "./emptytasks.module.css";
import noTasks from "/public/assets/imgs/no_tasks.jpeg";

export const EmptyTasks = () => {
    return (
        <article className={styles.empty_container}>
            <Image
                src={noTasks}
                alt=""
                width={300}
                height={300}
                className={styles.image}
            />
            <h4 className={styles.text}>Alguma tarefa hoje?</h4>
        </article>
    );
};

// assets\imgs\no_tasks.jpeg
