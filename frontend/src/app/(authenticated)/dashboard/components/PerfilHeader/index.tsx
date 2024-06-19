"use client";

import Image from "next/image";
import bee from "/public/assets/imgs/logo_bee_done1.svg";
import styles from "./perfil.module.css";
import { UserResponseModel } from "@/app/Models/UserReponseModel";
import { useEffect, useState } from "react";
import { Modal } from "@/app/components/Modal";
import { logoutRemoveToken } from "@/services/api-requests/logout-remove-token";
import { useRouter } from "next/navigation";
import { PerfilModalUpdate } from "../PerfilModalUpdate";
import { getAvatarById } from "@/services/api-requests/get-avatar-by-id";
import { AvatarModel } from "@/app/Models/AvatarModel";

interface PerfilHeaderProps {
    user: UserResponseModel;
}

export const PerfilHeader = ({ user }: PerfilHeaderProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [avatarSrc, setAvatarSrc] = useState<AvatarModel>(user.avatar);

    const router = useRouter();

    useEffect(() => {
        const handleFetchAvatar = async () => {
            const avatar: AvatarModel = await getAvatarById(user.avatar.id);
            setAvatarSrc(avatar);
        };

        handleFetchAvatar();
    }, [user.avatar.id, avatarSrc]);

    const { email, name } = user;

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleLogout = () => {
        logoutRemoveToken();
        router.refresh();
    };

    return (
        <>
            {openModal && (
                <Modal setOpenModal={setOpenModal} titleModal="Perfil">
                    <PerfilModalUpdate
                        user={user}
                        handleLogout={handleLogout}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

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
                        <h3 className={styles.name}>{name}</h3>
                        <h3 className={styles.email}>{email}</h3>
                    </hgroup>
                    <button
                        className={styles.perfil_btn}
                        onClick={handleOpenModal}
                    >
                        <Image
                            src={avatarSrc.pathname}
                            alt="Foto do perfil"
                            className={styles.perfil}
                            width={300}
                            height={300}
                        />
                    </button>
                </div>
            </header>
        </>
    );
};
