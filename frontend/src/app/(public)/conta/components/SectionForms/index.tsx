import Link from "next/link";
import styles from "./section.module.css";
import { RenderChangeForms } from "../RenderChangeForms";

import { TbHomeShare } from "react-icons/tb";
import { LogoType } from "@/app/components/Logotype";

export const SectionForms = () => {
    return (
        <aside className={styles.section_container}>
            <LogoType />

            <RenderChangeForms />

            <Link href={"/"} className={styles.link_home}>
                Página principal <TbHomeShare size={20} color="#000" />
            </Link>
        </aside>
    );
};
