import Link from "next/link";
import styles from "./cta.module.css";
import { HiExternalLink } from "react-icons/hi";
import { SmallDivisorTop } from "../../components/SmallDivisorTop";
import { SmallDivisorBottom } from "../../components/SmallDivisorBottom";

export const Cta = () => {
    return (
        <section className={styles.cta_container}>
            <SmallDivisorTop />
            <article className={styles.content_container}>
                <h1 className={styles.title}>
                    Pronto para transformar sua produtividade? Cadastre-se hoje
                    e experimente o Bee Done gratuitamente. Descubra como nossa
                    ferramenta pode ajudar você a organizar suas tarefas e
                    alcançar seus objetivos com mais eficiência.
                </h1>

                <Link href="/conta" className={styles.link}>
                    Criar conta
                </Link>
            </article>

            <SmallDivisorBottom />
        </section>
    );
};
