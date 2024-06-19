import prismaClient from "../../utils/prisma-client";
import { createAvatarRepository } from "./create-avatar-repository";

export const createUserRepository = async (
    email: string,
    hashpPassword: string
) => {
    const userDefault = email?.split("@")[0] || "";

    const user = await prismaClient.user.create({
        data: {
            email,
            password: hashpPassword,
            name: userDefault,
        },
    });

    await createAvatarRepository(user.id);

    return user;
};
