import Link from "next/link";
import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div>
                <p>Todos os direitos reservados - © Bee Done</p>
            </div>

            <div className={styles.dev_container}>
                <p>Desenvolvido por:</p>
                <Link
                    href={"https://robertobaiochi.dev.br"}
                    target="_blank"
                    className={styles.dev}
                >
                    Roberto Baiochi
                </Link>
                <Link
                    href={"https://github.com/RobertoBaiochi"}
                    target="_blank"
                    className={styles.icon}
                >
                    <FaGithub size={20} />
                </Link>

                <Link
                    href={"https://www.linkedin.com/in/roberto-baiochi/"}
                    target="_blank"
                    className={styles.icon}
                >
                    <FaLinkedinIn size={20} />
                </Link>
            </div>
        </footer>
    );
};
