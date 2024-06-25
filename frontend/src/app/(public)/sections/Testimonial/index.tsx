import { userTestimonials } from "@/constants/users";
import styles from "./testimonial.module.css";
import { UserTestimonialCard } from "../../components/UserTestimonialCard";

export const Testimonial = () => {
    return (
        <section className={styles.testimonial_container}>
            <hgroup className={styles.content_container}>
                <h1 className={styles.title}>
                    O que nossos u<span className={styles.letter}>s</span>uários
                    dizem
                </h1>
                <h3 className={styles.subtitle}>
                    Nada melhor do que ouvir diretamente de quem usa o Bee Done
                    diariamente. Veja o que nossos usuários têm a dizer sobre a
                    experiência deles com nossa ferramenta de gestão de tarefas
                    e como ela tem impactado positivamente suas rotinas de
                    trabalho.
                </h3>
            </hgroup>

            <article className={styles.card_grid_container}>
                {userTestimonials.map((user) => (
                    <UserTestimonialCard
                        image={user.image}
                        name={user.name}
                        testimonial={user.testimonial}
                        key={user.id}
                    />
                ))}
            </article>
        </section>
    );
};
