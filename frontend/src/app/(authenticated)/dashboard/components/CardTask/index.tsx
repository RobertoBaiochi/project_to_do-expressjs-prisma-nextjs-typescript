"use client";

import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./cardtask.module.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { deleteTaskById } from "@/services/api-requests/delete-task-by-id";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useEffect } from "react";
import { updateIndexTask } from "@/services/api-requests/update-index-task";
import { BiMessageAltDetail } from "react-icons/bi";

interface CardTaskProps {
    task: ResponseTaskModel;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
    indexArray: number;
    status: "TODO" | "DOING" | "DONE";
    setOpenModalUpdate: Dispatch<SetStateAction<boolean>>;
    setOpenModalDescription: Dispatch<SetStateAction<boolean>>;
}

export const CardTask = ({
    task,
    setActiveId,
    indexArray,
    status,
    setOpenModalUpdate,
    setOpenModalDescription,
}: CardTaskProps) => {
    const router = useRouter();

    useEffect(() => {
        const updateIndex = async () => {
            await updateIndexTask(task.id, indexArray);
        };
        updateIndex();
    }, [task, indexArray, status, router]);

    const handleDelete = async () => {
        await deleteTaskById(task.id);
        router.refresh();
        toast.success(`A task '${task.title}' foi deletada`);
    };

    const handleUpdate = () => {
        setOpenModalUpdate(true);
        setActiveId(task.id);
    };

    const handleDescription = () => {
        setActiveId(task.id);
        setOpenModalDescription(true);
    };

    const handleDragStart = () => {
        setActiveId(task.id);
    };

    const handleDragEnd = () => {
        setActiveId("");
    };

    return (
        <li
            className={styles.card_container}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <h4>{task.title}</h4>

            <div className={styles.card_actions}>
                {task.description && (
                    <button className={styles.btn} onClick={handleDescription}>
                        <BiMessageAltDetail size={22} color="#fff" />
                    </button>
                )}
                <button onClick={handleUpdate} className={styles.btn}>
                    <BiEdit size={22} color="#ffcd04" />
                </button>
                <button className={styles.btn} onClick={handleDelete}>
                    <RiDeleteBinLine size={22} color="#ce301b" />
                </button>
            </div>
        </li>
    );
};
