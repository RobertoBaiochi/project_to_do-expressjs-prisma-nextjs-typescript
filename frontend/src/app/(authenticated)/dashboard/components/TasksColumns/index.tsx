import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./taskscolumns.module.css";
import { CardTask } from "../CardTask";
import React, { Dispatch, SetStateAction } from "react";
import { DropArea } from "../DropArea";
import { Modal } from "@/app/components/Modal";
import { UpdateTaskModal } from "../UpdateTaskModal";
import { DescriptionTaskModal } from "../DescriptionTaskModal";

interface TasksColumnsProps {
    title: string;
    tasks: ResponseTaskModel[];
    status: "TODO" | "DOING" | "DONE";
    setActiveId: Dispatch<SetStateAction<string>>;
    activeId: string;
    handleOnDrop: (
        indexArray: number,
        stauts: "TODO" | "DOING" | "DONE",
        tasks: ResponseTaskModel[]
    ) => Promise<void>;
    setOpenModalUpdate: Dispatch<SetStateAction<boolean>>;
    openModalUpdate: boolean;
    setOpenModalDescription: Dispatch<SetStateAction<boolean>>;
    openModalDescription: boolean;
}

export const TasksColumns = ({
    title,
    tasks,
    status,
    setActiveId,
    activeId,
    handleOnDrop,
    setOpenModalUpdate,
    openModalUpdate,
    setOpenModalDescription,
    openModalDescription,
}: TasksColumnsProps) => {
    return (
        <article className={styles.columns_container} key={status}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            {openModalDescription && (
                <Modal
                    setOpenModal={setOpenModalDescription}
                    titleModal="Description Task"
                    key={"description"}
                >
                    <DescriptionTaskModal taskId={activeId} />
                </Modal>
            )}

            {openModalUpdate && (
                <Modal
                    setOpenModal={setOpenModalUpdate}
                    titleModal="Update Task"
                    key={"update"}
                >
                    <UpdateTaskModal
                        taskId={activeId}
                        setOpenModal={setOpenModalUpdate}
                    />
                </Modal>
            )}

            <div className={styles.list_container}>
                {tasks.length === 0 && (
                    <DropArea
                        handleOnDrop={() => handleOnDrop(1, status, tasks)}
                    />
                )}

                {tasks.map((task, indexArray) => (
                    <React.Fragment key={indexArray}>
                        <CardTask
                            task={task}
                            setActiveId={setActiveId}
                            indexArray={indexArray + 1}
                            status={status}
                            setOpenModalUpdate={setOpenModalUpdate}
                            setOpenModalDescription={setOpenModalDescription}
                        />

                        <DropArea
                            handleOnDrop={() =>
                                handleOnDrop(indexArray + 1, status, tasks)
                            }
                        />
                    </React.Fragment>
                ))}
            </div>
        </article>
    );
};
