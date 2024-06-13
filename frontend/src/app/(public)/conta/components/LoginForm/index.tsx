"use client";

import styles from "./loginform.module.css";
import { useRouter } from "next/navigation";
import { loginToken } from "@/services/api-requests/login-set-token";
import { UserAccountModel } from "@/app/Models/UserAccountModel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

export const LoginForm = () => {
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

    const handleLogin = async (formData: UserAccountModel) => {
        setButtonDisabled(true);

        try {
            const isLoggedIn = await loginToken(
                formData.email,
                formData.password
            );

            if (!isLoggedIn) {
                toast.error("Email e/ou senha inválido(s).");
            }

            toast.success("Login feito com sucesso!");
            router.push("/dashboard");
        } catch {
            toast.error("Email e/ou senha inválido(s).");
        } finally {
            reset(initialValue);
            setButtonDisabled(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            key={"login"}
            className={styles.form_container}
        >
            <h2 className={styles.title}>
                L<span className={styles.letter}>o</span>gin
            </h2>
            <div className={styles.input_container}>
                <label htmlFor="email" className={styles.label}>
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
                <label htmlFor="password" className={styles.label}>
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
                Login
            </button>
        </form>
    );
};
