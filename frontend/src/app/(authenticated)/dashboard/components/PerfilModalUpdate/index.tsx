"use client";

import { UserResponseModel } from "@/app/Models/UserReponseModel";
import Image from "next/image";
import styles from "./perfilmodal.module.css";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TbPhotoCirclePlus } from "react-icons/tb";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserNameById } from "@/services/api-requests/update-user-name-by-id";
import { updateAvatarUser } from "@/services/api-requests/update-avatar-user";
import { useRouter } from "next/navigation";
import { logoutRemoveToken } from "@/services/api-requests/logout-remove-token";
import { deleteUserAccount } from "@/services/api-requests/delete-user-account";

interface PerfilModalUpdateProps {
    user: UserResponseModel;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const schema = z.object({
    name: z
        .string()
        .min(3, "O campo deve ter ao menos 3 caracteres")
        .max(35, "Este campo pode ter no máximo 35 caracteres"),
    avatar: z.any(),
});

export const PerfilModalUpdate = ({
    user,
    setOpenModal,
}: PerfilModalUpdateProps) => {
    const [imageSrc, setImageSrc] = useState<string>(
        user.avatar?.pathname || ""
    );
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: user,
    });

    const {
        avatar: { id: avatarID },
    } = user;

    const handleUpdateUser = async (formData: any): Promise<void> => {
        const { avatar, name } = formData;

        if (user.id && avatarID) {
            await updateUserNameById(user.id, name);
            await updateAvatarUser(avatar, avatarID);
            router.refresh();
            setOpenModal(false);
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && typeof e.target.result === "string") {
                    setImageSrc(e.target.result);
                    setIsImageLoaded(false); // Reset the image loaded state
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const handleCancel = () => {
        setOpenModal(false);
        reset(user);
    };

    const handleLogout = () => {
        logoutRemoveToken();
        router.push("/");
    };

    const handleDeleteUser = async () => {
        await deleteUserAccount();
        logoutRemoveToken();
        router.push("/");
    };

    return (
        <article className={styles.perfil_container}>
            <form
                className={styles.form_container}
                onSubmit={handleSubmit(handleUpdateUser)}
            >
                <div className={styles.input_container}>
                    <label htmlFor="avatar" className={styles.avatar_container}>
                        <Image
                            src={imageSrc}
                            onLoad={handleImageLoad}
                            width={300}
                            height={300}
                            alt={"Imagem de perfil"}
                            className={styles.avatar}
                        />
                    </label>

                    <div className={styles.icon}>
                        <TbPhotoCirclePlus size={24} color="#000" />
                    </div>

                    <input
                        type="file"
                        id="avatar"
                        style={{ display: "none" }}
                        accept="image/jpg, image/jpeg, image/png"
                        {...register("avatar", {
                            onChange: (e) => {
                                handleImageChange(e);
                            },
                        })}
                    />
                </div>

                <div className={styles.info_container}>
                    <p className={styles.email}>{user.email}</p>
                    <div className={styles.input_name_container}>
                        <label htmlFor="name" className={styles.label}>
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={styles.input}
                        />
                    </div>
                    <p>{errors.avatar?.message}</p>
                    <p>{errors.name?.message}</p>
                </div>

                <div className={styles.action_btns}>
                    <button
                        type="submit"
                        disabled={!isImageLoaded}
                        className={styles.submit_btn}
                    >
                        Salvar
                    </button>

                    <button
                        type="button"
                        disabled={!isImageLoaded}
                        className={styles.cancel_btn}
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </form>

            <hr />

            <div className={styles.account_container}>
                <h3>Sua conta</h3>

                <div className={styles.account_btns}>
                    <p>Deseja sair da conta?</p>
                    <button
                        type="button"
                        disabled={!isImageLoaded}
                        className={styles.logout_btn}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>

                <div className={styles.account_btns}>
                    <p>Deseja excluir sua conta?</p>
                    <button
                        type="button"
                        disabled={!isImageLoaded}
                        className={styles.delete_btn}
                        onClick={handleDeleteUser}
                    >
                        Excluir Conta
                    </button>
                </div>
            </div>
        </article>
    );
};
