"use client";

import styles from "./tasks.module.css";
import { TasksColumns } from "../TasksColumns";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { useState } from "react";
import { updateStatusTask } from "@/services/api-requests/update-status-task";
import { useRouter } from "next/navigation";
import { updateIndexTask } from "@/services/api-requests/update-index-task";
import { toast } from "react-toastify";

interface TasksSectionProps {
    todoTasks: ResponseTaskModel[];
    doingTasks: ResponseTaskModel[];
    doneTasks: ResponseTaskModel[];
}

export const TasksSection = ({
    todoTasks,
    doingTasks,
    doneTasks,
}: TasksSectionProps) => {
    const [activeId, setActiveId] = useState<string>("");
    const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
    const [openModalDescription, setOpenModalDescription] =
        useState<boolean>(false);

    const router = useRouter();

    const handleOnDrop = async (
        indexArray: number,
        status: "TODO" | "DOING" | "DONE"
    ) => {
        await updateIndexTask(activeId, indexArray);
        await updateStatusTask(activeId, status);

        toast.success("Status atualizado.");
        router.refresh();
    };

    return (
        <section className={styles.section_container}>
            <TasksColumns
                title="🎯 To do"
                tasks={todoTasks}
                status="TODO"
                setActiveId={setActiveId}
                activeId={activeId}
                handleOnDrop={handleOnDrop}
                setOpenModalUpdate={setOpenModalUpdate}
                openModalUpdate={openModalUpdate}
                setOpenModalDescription={setOpenModalDescription}
                openModalDescription={openModalDescription}
            />
            <TasksColumns
                title="🚀 Doing"
                tasks={doingTasks}
                status="DOING"
                setActiveId={setActiveId}
                activeId={activeId}
                handleOnDrop={handleOnDrop}
                setOpenModalUpdate={setOpenModalUpdate}
                openModalUpdate={openModalUpdate}
                setOpenModalDescription={setOpenModalDescription}
                openModalDescription={openModalDescription}
            />
            <TasksColumns
                title="🔥 Done"
                tasks={doneTasks}
                status="DONE"
                setActiveId={setActiveId}
                activeId={activeId}
                handleOnDrop={handleOnDrop}
                setOpenModalUpdate={setOpenModalUpdate}
                openModalUpdate={openModalUpdate}
                setOpenModalDescription={setOpenModalDescription}
                openModalDescription={openModalDescription}
            />
        </section>
    );
};
