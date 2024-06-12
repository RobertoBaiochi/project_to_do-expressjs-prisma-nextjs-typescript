import Image from "next/image";
import styles from "./logotype.module.css";
import logo from "/public/assets/imgs/logo_bee_done1.svg";

export const LogoType = () => {
    return (
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
    );
};
