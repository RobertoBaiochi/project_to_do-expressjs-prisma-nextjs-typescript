"use client";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./taskscolumns.module.css";
import { CardTask } from "../CardTask";
import { updateStatusTask } from "@/services/api-requests/update-status-task";
import React, { Dispatch, SetStateAction, useState } from "react";
import { DropArea } from "../DropArea";
import { useRouter } from "next/navigation";

interface TasksColumnsProps {
    title: string;
    tasks: ResponseTaskModel[];
    status: "TODO" | "DOING" | "DONE";
    setActiveId: Dispatch<SetStateAction<string>>;
    activeId: string;
}

export const TasksColumns = ({
    title,
    tasks,
    status,
    setActiveId,
    activeId,
}: TasksColumnsProps) => {
    const router = useRouter();

    const handleOnDrop = async () => {
        await updateStatusTask(activeId, status);
        router.refresh();
    };

    return (
        <article className={styles.columns_container} key={status}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.list_container}>
                <DropArea handleOnDrop={handleOnDrop} />
                {tasks.length === 0 && (
                    <li className={styles.no_card}>sem tasks...</li>
                )}

                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <CardTask task={task} setActiveId={setActiveId} />

                        <DropArea handleOnDrop={handleOnDrop} />
                    </React.Fragment>
                ))}
            </div>
        </article>
    );
};
