import { LogoType } from "@/app/components/Logotype";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.logo_container}>
                <LogoType />
            </div>

            <nav>
                <Link className={styles.navigation} href={"/conta"}>
                    Conta
                </Link>
            </nav>
        </header>
    );
};
