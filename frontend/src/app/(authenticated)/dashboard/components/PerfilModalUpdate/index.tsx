// "use client";

// import { UserResponseModel } from "@/app/Models/UserReponseModel";
// import Image from "next/image";
// import styles from "./perfilmodal.module.css";
// import {
//     ChangeEvent,
//     Dispatch,
//     SetStateAction,
//     useState,
// } from "react";
// import { TbPhotoCirclePlus } from "react-icons/tb";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { updateUserNameById } from "@/services/api-requests/update-user-name-by-id";
// import { updateAvatarUser } from "@/services/api-requests/update-avatar-user";
// import { useRouter } from "next/navigation";

// interface PerfilModalUpdateProps {
//     user: UserResponseModel;
//     handleLogout: () => void;
//     setOpenModal: Dispatch<SetStateAction<boolean>>;
// }

// const schema = z.object({
//     name: z
//         .string()
//         .min(3, "O campo deve ter ao menos 3 caracteres")
//         .max(35, "Este campo pode ter no máximo 35 caracteres"),
//     avatar: z.any(),
// });

// export const PerfilModalUpdate = ({
//     user,
//     handleLogout,
//     setOpenModal,
// }: PerfilModalUpdateProps) => {
//     // const [avatarImage, setAvatarImage] = useState<string>("");
//     const [imageSrc, setImageSrc] = useState<string>(user.avatar.pathname || "");
//     const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

//     const router = useRouter();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm({
//         resolver: zodResolver(schema),
//         defaultValues: user!,
//     });

//     const handleUpdateUser = async (formData: any): Promise<void> => {
//         const { avatar, name } = formData;
//         await updateUserNameById(user.id, name);
//         await updateAvatarUser(avatar);
//         setOpenModal(false);
//         router.refresh();
//     };

//     const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e: ProgressEvent<FileReader>) => {
//                 if (e.target && typeof e.target.result === "string") {
//                     setImageSrc(e.target.result);
//                     setIsImageLoaded(false); // Reset the image loaded state
//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleImageLoad = () => {
//         setIsImageLoaded(true);
//     };

//     return (
//         <article className={styles.perfil_container}>
//             <form
//                 className={styles.form_container}
//                 onSubmit={handleSubmit(handleUpdateUser)}
//             >
//                 <div className={styles.input_container}>
//                     <label htmlFor="avatar" className={styles.avatar_container}>
//                         <Image
//                             src={imageSrc || user.avatar.pathname}
//                             onLoad={handleImageLoad}
//                             width={300}
//                             height={300}
//                             alt={"Imagem de perfil"}
//                             className={styles.avatar}
//                         />
//                     </label>

//                     <div className={styles.icon}>
//                         <TbPhotoCirclePlus size={24} color="#000" />
//                     </div>

//                     <button>Excluir Imagem</button>

//                     <input
//                         type="file"
//                         id="avatar"
//                         style={{ display: "none" }}
//                         accept="image/jpg, image/jpeg, image/png"
//                         {...register("avatar", {
//                             onChange: (e) => {
//                                 handleImageChange(e);
//                             },
//                         })}
//                         // {...register("avatar", {
//                         //     onChange: (e) => {
//                         //         if (
//                         //             e.target.files &&
//                         //             e.target.files.length > 0
//                         //         ) {
//                         //             const file = URL.createObjectURL(
//                         //                 e.target.files[0]
//                         //             );
//                         //             setAvatarImage(file);
//                         //         }
//                         //     },
//                         // })}
//                     />
//                 </div>

//                 <div className={styles.info_container}>
//                     <p>Email: {user.email}</p>
//                     <div>
//                         <label>Name:</label>
//                         <input type="text" id="name" {...register("name")} />
//                     </div>
//                 </div>

//                 <button type="submit">Salvar</button>
//             </form>
//             <button onClick={handleLogout}>Logout</button>
//             <p>{errors.avatar?.message}</p>
//             <p>{errors.name?.message}</p>
//         </article>
//     );
// };

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

interface PerfilModalUpdateProps {
    user: UserResponseModel;
    handleLogout: () => void;
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
    handleLogout,
    setOpenModal,
}: PerfilModalUpdateProps) => {
    const [imageSrc, setImageSrc] = useState<string>(
        user.avatar.pathname || ""
    );
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    const router = useRouter();

    const {
        register,
        handleSubmit,
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
        await updateUserNameById(user.id, name);
        await updateAvatarUser(avatar, avatarID);
        router.refresh();
        setOpenModal(false);
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

                    <button>Excluir Imagem</button>

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
                    <p>Email: {user.email}</p>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" {...register("name")} />
                    </div>
                </div>

                <button type="submit" disabled={!isImageLoaded}>
                    Salvar
                </button>
            </form>
            <button onClick={handleLogout}>Logout</button>
            <p>{errors.avatar?.message}</p>
            <p>{errors.name?.message}</p>
        </article>
    );
};
