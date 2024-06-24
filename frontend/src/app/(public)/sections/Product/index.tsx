import Image from "next/image";
import dashboard from "/public/assets/imgs/dashboard.png";
import styles from "./product.module.css";
import { Divisor } from "../DivisorTop";
import { DivisorBottom } from "../DivisorBottom";

export const Product = () => {
    return (
        <section className={styles.hero_container}>
            <Divisor />
            <div className={styles.width_container}>
                <div className={styles.image_container}>
                    <Image src={dashboard} alt="" className={styles.image} />
                </div>

                <article className={styles.content_container}>
                    <h1 className={styles.title}>Bem-vindo ao Bee Done</h1>
                    <h4 className={styles.subtitle}>
                        Sua nova ferramenta de organização de tarefas no estilo
                        Kanban. Inspirado na organização e eficiência das
                        abelhas, o Bee Done oferece uma interface intuitiva que
                        permite visualizar e gerenciar suas tarefas de forma
                        clara e prática. Com ele, você pode:
                    </h4>
                    <ul className={styles.list_container}>
                        <li className={styles.list_style}>
                            Criar quadros personalizados para diferentes
                            projetos.
                        </li>
                        <li className={styles.list_style}>
                            Adicionar e mover cartões entre colunas para
                            monitorar o progresso.
                        </li>
                        <li className={styles.list_style}>
                            Definir prazos e prioridades para cada tarefa.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Seja para uso pessoal ou profissional, o Bee Done é a
                        solução ideal para quem busca produtividade e
                        organização. Experimente agora e veja suas tarefas serem
                        concluídas com precisão!
                    </p>
                </article>
            </div>
            <DivisorBottom />
        </section>
    );
};
