import styles from "./section.module.css";

export const Hero = () => {
    return (
        <section className={styles.section_hero}>
            <article className={styles.content_container}>
                <h1 className={styles.title}>
                    O<span className={styles.letter}>r</span>ganize-se!
                </h1>

                <ul className={styles.content_sub_text}>
                    <li>
                        <h3 className={styles.sub_title}>
                            Por que escolher o Bee Done?{" "}
                        </h3>
                        <ul>
                            <li className={styles.list_style}>
                                <p className={styles.text}>
                                    Interface Intuitiva e Amigável: O Bee Done
                                    foi projetado com você em mente.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className={styles.text}>
                    Nossa interface limpa e fácil de usar permite que você
                    organize suas tarefas rapidamente, sem complicações. Com
                    poucos cliques, você pode adicionar, editar e priorizar suas
                    tarefas, tornando o gerenciamento de seu tempo mais
                    eficiente.
                </p>

                <ul className={styles.content_sub_text}>
                    <li>
                        <h3 className={styles.sub_title}>
                            Organização e Prioridades:
                        </h3>
                        <ul>
                            <li className={styles.list_style}>
                                <p className={styles.text}>
                                    Com o Bee Done, você pode criar listas de
                                    tarefas personalizadas e categorizá-las
                                    conforme suas necessidades.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className={styles.text}>
                    Defina prioridades, prazos e lembretes para garantir que
                    nada fique para trás. Nosso sistema de cores e etiquetas
                    visuais ajuda você a identificar rapidamente o que é mais
                    urgente e importante.
                </p>

                <ul className={styles.content_sub_text}>
                    <li>
                        <h3 className={styles.sub_title}>
                            Segurança e Confiabilidade:
                        </h3>
                        <ul>
                            <li className={styles.list_style}>
                                <p className={styles.text}>
                                    Sabemos que seus dados são importantes. Por
                                    isso, utilizamos tecnologia de ponta para
                                    garantir que suas informações estejam sempre
                                    seguras e acessíveis apenas a você. Nossa
                                    infraestrutura robusta assegura que o Bee
                                    Done esteja sempre disponível quando você
                                    precisar.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>
        </section>
    );
};
