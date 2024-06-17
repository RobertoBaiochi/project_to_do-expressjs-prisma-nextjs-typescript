import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./taskscolumns.module.css";
import { CardTask } from "../CardTask";
import React, { Dispatch, SetStateAction } from "react";
import { DropArea } from "../DropArea";

interface TasksColumnsProps {
    title: string;
    tasks: ResponseTaskModel[];
    status: "TODO" | "DOING" | "DONE";
    setActiveId: Dispatch<SetStateAction<string>>;
    handleOnDrop: (
        indexArray: number,
        stauts: "TODO" | "DOING" | "DONE",
        tasks: ResponseTaskModel[]
    ) => Promise<void>;
}

export const TasksColumns = ({
    title,
    tasks,
    status,
    setActiveId,
    handleOnDrop,
}: TasksColumnsProps) => {
    return (
        <article className={styles.columns_container} key={status}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.list_container}>
                {tasks.length === 0 && (
                    <DropArea
                        handleOnDrop={() => handleOnDrop(1, status, tasks)}
                        indexArray={1}
                    />
                )}

                {tasks.map((task, indexArray) => (
                    <React.Fragment key={indexArray}>
                        <CardTask
                            task={task}
                            setActiveId={setActiveId}
                            indexArray={indexArray + 1}
                            status={status}
                        />

                        <DropArea
                            handleOnDrop={() =>
                                handleOnDrop(indexArray + 1, status, tasks)
                            }
                            indexArray={indexArray + 1}
                        />
                    </React.Fragment>
                ))}
            </div>
        </article>
    );
};
