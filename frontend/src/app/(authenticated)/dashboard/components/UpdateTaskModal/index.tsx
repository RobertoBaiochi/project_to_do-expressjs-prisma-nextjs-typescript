"use client";

import { getTaskById } from "@/services/api-requests/get-task-by-id";
import styles from "./updateModal.module.css";
import { useEffect, useState } from "react";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateStatusTask } from "@/services/api-requests/update-status-task";
import { useRouter } from "next/navigation";
import { updateTaskById } from "@/services/api-requests/update-task-by-id";

interface UpdateTaskModalProps {
    taskId: string;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const schema = z.object({
    title: z
        .string()
        .min(3, "O campo deve ter ao menos 3 caracteres")
        .max(35, "Este campo pode ter no máximo 35 caracteres"),
    status: z.string(),
    description: z.string(),
});

export const UpdateTaskModal = ({
    taskId,
    setOpenModal,
}: UpdateTaskModalProps) => {
    const [task, setTask] = useState<ResponseTaskModel>();

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: task!,
    });

    useEffect(() => {
        const fetch = async () => {
            const result = await getTaskById(taskId);
            setTask(result);
            reset(result);
        };

        fetch();
    }, [taskId, setTask, reset]);

    const handleUpdateTask = async (formData: ResponseTaskModel) => {
        const { title, description, status } = formData;

        await updateStatusTask(taskId, status);
        await updateTaskById(taskId, title, description);

        setOpenModal(false);
        router.refresh();
    };

    const handleCancelUpdate = () => {
        setOpenModal(false);
        reset(task);
    };

    return (
        <form
            className={styles.form_container}
            onSubmit={handleSubmit(handleUpdateTask)}
        >
            <div className={styles.container_double_inputs}>
                <div className={styles.container_label}>
                    <label>Tarefa:</label>
                    <input
                        type="text"
                        id="title"
                        {...register("title")}
                        className={styles.input_task}
                    />
                </div>

                <div className={styles.container_select}>
                    <label>
                        Status:
                        <select
                            className={styles.input_select}
                            {...register("status")}
                        >
                            <option value={"TODO"}>To-do</option>
                            <option value={"DOING"}>Doing</option>
                            <option value={"DONE"}>Done</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className={styles.container_textarea}>
                <label>Descrição:</label>
                <textarea
                    className={styles.input_textarea}
                    {...register("description")}
                ></textarea>
            </div>
            <div className={styles.container_actions}>
                <button type="submit" className={styles.btn_submit}>
                    Salvar
                </button>

                <button
                    type="button"
                    className={styles.btn_cancel}
                    onClick={handleCancelUpdate}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};
