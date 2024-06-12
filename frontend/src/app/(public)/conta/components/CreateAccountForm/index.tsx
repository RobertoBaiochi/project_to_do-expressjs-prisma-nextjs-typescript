"use client";

import styles from "./createform.module.css";
import { UserAccountModel } from "@/app/Models/UserAccountModel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import { createAccountService } from "@/services/api-requests/create-account";
import { toast } from "react-toastify";

const schema = z.object({
    email: z.string().email({ message: "Insira um email válido." }),
    password: z
        .string()
        .min(8, { message: "Sua senha tem no mínimo 8 caracteres." }),
});

const initialValue: UserAccountModel = {
    email: "",
    password: "",
};

interface CreateAccountFormProps {
    setChangeForm: Dispatch<SetStateAction<boolean>>;
}

export const CreateAccountForm = ({
    setChangeForm,
}: CreateAccountFormProps) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: initialValue,
    });

    const handleLogin = async (formData: UserAccountModel) => {
        setButtonDisabled(true);

        try {
            const isCreated = await createAccountService(
                formData.email,
                formData.password
            );

            if (!isCreated) {
                toast.error("O usuário já existe.");
                reset(initialValue);
                return;
            }

            toast.success("Conta criada com sucesso!");
            setChangeForm((prev) => !prev);
            reset(initialValue);
        } catch {
            toast.error(
                "Erro ao criar o usuário, tente novamente em alguns minutos."
            );
        } finally {
            setButtonDisabled(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            key={"create"}
            className={styles.form_container}
        >
            <h1 className={styles.title}>
                C<span className={styles.letter}>a</span>dastro
            </h1>
            <div className={styles.input_container}>
                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="seuemail@email.com"
                    className={styles.input}
                />
                {errors.email && (
                    <p className={styles.error_msg}>{errors.email.message}</p>
                )}
            </div>
            <div className={styles.input_container}>
                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                    placeholder="Digite sua senha"
                    className={styles.input}
                />
                {errors.password && (
                    <p className={styles.error_msg}>
                        {errors.password.message}
                    </p>
                )}
            </div>

            <button
                disabled={buttonDisabled}
                type="submit"
                className={styles.btn}
            >
                Cadastrar
            </button>
        </form>
    );
};
