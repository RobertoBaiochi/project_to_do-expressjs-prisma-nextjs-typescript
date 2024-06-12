import Link from "next/link";
import { RenderChangeForms } from "../RenderChangeForms";
import styles from "./section.module.css";
import Image from "next/image";
import logo from "/public/assets/imgs/logo_bee_done1.svg";
import { TbHomeShare } from "react-icons/tb";

export const SectionForms = () => {
    return (
        <aside className={styles.section_container}>
            <div className={styles.logo_container}>
                <h1 className={styles.title}>
                    B<span className={styles.letter}>e</span>e{" "}
                    <span className={styles.done}>Done</span>
                </h1>
                <Image
                    src={logo}
                    alt="logo de uma abelha"
                    className={styles.logo}
                    width={300}
                    height={300}
                />
            </div>

            <RenderChangeForms />

            <Link href={"/"} className={styles.link_home}>
                Página principal <TbHomeShare size={20} color="#000" />
            </Link>
        </aside>
    );
};
