import prismaClient from "../../utils/prisma-client";

export const createUserRepository = async (
    email: string,
    hashpPassword: string
) => {
    const user = await prismaClient.user.create({
        data: {
            email,
            password: hashpPassword,
        },
    });

    return user;
};
