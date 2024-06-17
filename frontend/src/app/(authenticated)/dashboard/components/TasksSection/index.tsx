"use client";

import styles from "./tasks.module.css";
import { TasksColumns } from "../TasksColumns";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { useState } from "react";
import { updateStatusTask } from "@/services/api-requests/update-status-task";
import { useRouter } from "next/navigation";
import { updateIndexTask } from "@/services/api-requests/update-index-task";

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

    const router = useRouter();

    const handleOnDrop = async (
        indexArray: number,
        status: "TODO" | "DOING" | "DONE"
    ) => {
        await updateIndexTask(activeId, indexArray);
        await updateStatusTask(activeId, status);

        router.refresh();
    };

    return (
        <section className={styles.section_container}>
            <TasksColumns
                title="🎯 To-do"
                tasks={todoTasks}
                status="TODO"
                setActiveId={setActiveId}
                handleOnDrop={handleOnDrop}
            />
            <TasksColumns
                title="🚀 Doing"
                tasks={doingTasks}
                status="DOING"
                setActiveId={setActiveId}
                handleOnDrop={handleOnDrop}
            />
            <TasksColumns
                title="🔥 Done"
                tasks={doneTasks}
                status="DONE"
                setActiveId={setActiveId}
                handleOnDrop={handleOnDrop}
            />
        </section>
    );
};
