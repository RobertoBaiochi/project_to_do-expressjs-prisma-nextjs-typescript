import Image from "next/image";
import bee from "/public/assets/imgs/logo_bee_done1.svg";
import avatarDefault from "/public/assets/imgs/avatar.svg";
import styles from "./perfil.module.css";
import { UserResponseModel } from "@/app/Models/UserReponseModel";

export const PerfilHeader = (user: UserResponseModel) => {
    const { email, name, avatar } = user;

    const userDefault = email?.split("@")[0] || "";

    return (
        <header className={styles.header_container}>
            <div className={styles.logo_container}>
                <Image
                    src={bee}
                    alt="logo de uma abelha"
                    className={styles.logo}
                    width={300}
                    height={300}
                />
                <h1 className={styles.title}>
                    B<span className={styles.letter}>e</span>e{" "}
                    <span className={styles.done}>Done</span>
                </h1>
            </div>

            <div className={styles.user_container}>
                <hgroup className={styles.text_container}>
                    <h3 className={styles.name}>{name || userDefault}</h3>
                    <h3 className={styles.email}>{email}</h3>
                </hgroup>

                <Image
                    src={avatar.pathname || avatarDefault}
                    alt="Foto do perfil"
                    className={styles.perfil}
                />
            </div>
        </header>
    );
};
