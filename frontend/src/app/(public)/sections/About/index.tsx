import styles from "./about.module.css";

export const About = () => {
    return (
        <section className={styles.about_container}>
            <article className={styles.content_container}>
                <h1 className={styles.title}>
                    Quem é a <span className={styles.letter}>B</span>e
                    <span className={styles.letter}>e</span> Done!?
                </h1>
                <p className={styles.paragraph}>
                    A Bee Done é uma empresa{" "}
                    <strong>
                        inovadora dedicada a transformar a maneira como as
                        pessoas e equipes gerenciam suas tarefas e projetos.
                    </strong>{" "}
                    Inspirada na organização e eficiência das abelhas, a Bee
                    Done desenvolveu uma{" "}
                    <strong>
                        ferramenta de gestão de tarefas no estilo Kanban
                    </strong>{" "}
                    que combina simplicidade, eficácia e colaboração.
                </p>

                <p className={styles.paragraph}>
                    <strong>
                        Nossa missão é capacitar indivíduos e equipes a
                        alcançarem seu máximo potencial,
                    </strong>{" "}
                    proporcionando uma plataforma intuitiva e poderosa que
                    facilita o planejamento, a execução e o acompanhamento de
                    tarefas e projetos.{" "}
                    <strong>
                        Acreditamos que uma boa organização é a chave para o
                        sucesso e a produtividade, e estamos comprometidos em
                        oferecer soluções que tornem o gerenciamento de tarefas
                        mais simples e eficiente.
                    </strong>
                </p>

                <p className={styles.paragraph}>
                    A Bee Done visa ser{" "}
                    <strong>
                        líder no mercado de ferramentas de gestão de tarefas,
                        reconhecida por nossa inovação, qualidade e capacidade
                        de transformar a maneira como as pessoas trabalham.
                    </strong>{" "}
                    Enxergamos um futuro onde todos, desde profissionais
                    autônomos até grandes equipes corporativas, possam alcançar
                    seus objetivos com clareza e eficiência através do uso de
                    nossas soluções.
                </p>

                <p className={styles.paragraph}>
                    Na Bee Done,{" "}
                    <strong>
                        acreditamos que a produtividade pode ser tão harmoniosa
                        quanto uma colmeia.
                    </strong>{" "}
                    Convidamos você a experimentar nossas soluções e ver como
                    podemos ajudar você e sua equipe a alcançar novos patamares
                    de eficiência e sucesso.
                </p>
            </article>
        </section>
    );
};
