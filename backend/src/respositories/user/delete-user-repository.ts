import prismaClient from "../../utils/prisma-client";

export const deleteUserRepository = async (userId: string) => {
    const data = await prismaClient.user.deleteMany({
        where: {
            id: userId,
        },
    });

    return data;
};
