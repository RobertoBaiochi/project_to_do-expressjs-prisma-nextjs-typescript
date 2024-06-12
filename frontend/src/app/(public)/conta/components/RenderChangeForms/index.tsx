"use client";
import styles from "./renderform.module.css";
import { useState } from "react";
import { LoginForm } from "../LoginForm";
import { CreateAccountForm } from "../CreateAccountForm";

export const RenderChangeForms = () => {
    const [changeForm, setChangeForm] = useState(false);

    return (
        <div className={styles.forms_container}>
            <p className={styles.text}>
                Bem-vindo ao Bee Done, a solução definitiva para o gerenciamento
                de tarefas! Sabemos que, em um mundo cada vez mais acelerado,
                manter suas responsabilidades em ordem pode ser um desafio. É
                por isso que criamos o Bee Done, um software de gerenciamento de
                tarefas que não só simplifica sua vida, mas também aumenta sua
                produtividade de forma significativa.
            </p>

            {changeForm && <LoginForm />}

            {!changeForm && <CreateAccountForm setChangeForm={setChangeForm} />}

            <button
                onClick={() => setChangeForm((prev) => !prev)}
                className={styles.change_btn}
            >
                {changeForm
                    ? "Ainda não tem sua conta?! Clique aqui crie agora mesmo!"
                    : "Já tem sua conta?! Clique aqui e faça o login!"}
            </button>
        </div>
    );
};
