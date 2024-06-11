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

    await prismaClient.avatar.create({
        data: {
            pathname: "",
            userId: user.id,
        },
    });

    return user;
};
