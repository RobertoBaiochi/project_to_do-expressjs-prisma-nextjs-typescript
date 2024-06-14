"use client";

import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import styles from "./cardtask.module.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { deleteTaskById } from "@/services/api-requests/delete-task-by-id";
import { toast } from "react-toastify";

interface CardTaskProps {
    task: ResponseTaskModel;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}

export const CardTask = ({ task, setActiveId }: CardTaskProps) => {
    const router = useRouter();

    const handleDelete = async () => {
        await deleteTaskById(task.id);
        router.refresh();
        toast.success(`A task '${task.title}' foi deletada`);
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
            onDrag={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            {task.title}
            <div className={styles.card_actions}>
                <button className={styles.btn}>
                    <BiEdit size={22} color="#ffcd04" />
                </button>
                <button className={styles.btn} onClick={handleDelete}>
                    <RiDeleteBinLine size={22} color="#ce301b" />
                </button>
            </div>
        </li>
    );
};
