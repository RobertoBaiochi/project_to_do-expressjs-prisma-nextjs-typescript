import styles from "./hero.module.css";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

export const Hero = () => {
    return (
        <section className={styles.hero_container}>
            <article className={styles.content_container}>
                <h1 className={styles.title}>
                    O<span className={styles.letter}>r</span>ganize-se
                </h1>
                <h4 className={styles.subtitle}>
                    Apresentamos o Bee Done, o organizador de tarefas no estilo
                    Kanban que você esperava!
                </h4>
                <p className={styles.paragraph}>
                    Com ele, gerenciar suas atividades nunca foi tão simples e
                    eficaz. Visualize, priorize e finalize suas tarefas com a
                    agilidade e eficiência. Experimente o Bee Done e transforme
                    sua produtividade!
                </p>

                <Link href="/conta" className={styles.link}>
                    Criar Conta <HiExternalLink size={18} color="#fff" />
                </Link>
            </article>
        </section>
    );
};
