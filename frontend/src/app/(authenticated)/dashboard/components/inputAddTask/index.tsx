"use client";
import { FiPlus } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "./inputAdd.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import { CreateTaskModel } from "@/app/Models/CreateTaskModel";
import { createTaskService } from "@/services/api-requests/create-task";
import { useRouter } from "next/navigation";

const schema = z.object({
    title: z
        .string()
        .min(3, "O campo deve ter ao menos 3 caracteres")
        .max(35, "Este campo pode ter no máximo 35 caracteres"),
});

const initialValue: CreateTaskModel = {
    title: "",
};

export const InputAddTask = () => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: initialValue,
    });

    const handleCreateTask = async (formData: CreateTaskModel) => {
        setButtonDisabled(true);

        try {
            const isCreated = await createTaskService(formData.title);

            if (!isCreated) {
                toast.error("Erro ao criar a tarefa!");
            }

            router.refresh();
            toast.success("Tarefa criada com sucesso");
        } catch {
            toast.error("Erro ao criar a tarefa!");
        } finally {
            reset(initialValue);
            setButtonDisabled(false);
        }
    };

    return (
        <section className={styles.section_form}>
            <form
                onSubmit={handleSubmit(handleCreateTask)}
                className={styles.form_container}
            >
                <div className={styles.input_container}>
                    {errors && (
                        <p className={styles.error_msg}>
                            {errors.title?.message}
                        </p>
                    )}
                    <label className={styles.icon_plus} htmlFor="title">
                        <FiPlus size={26} color="#fff" />
                    </label>
                    <input
                        type="text"
                        id="title"
                        {...register("title")}
                        placeholder="Adicionar uma tarefa"
                        className={styles.input}
                        disabled={buttonDisabled}
                    />

                    <button
                        className={styles.icon_send}
                        type="submit"
                        disabled={buttonDisabled}
                    >
                        <RiSendPlaneFill size={20} color="#ffcd04" />
                    </button>
                </div>
            </form>
        </section>
    );
};
