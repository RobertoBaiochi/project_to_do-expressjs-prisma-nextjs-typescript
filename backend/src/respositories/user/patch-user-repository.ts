import prismaClient from "../../utils/prisma-client";

export const updateUserRepository = async (userId: string, name: string) => {
    const data = await prismaClient.user.update({
        where: {
            id: userId,
        },
        data: {
            name,
        },
    });

    return data;
};
