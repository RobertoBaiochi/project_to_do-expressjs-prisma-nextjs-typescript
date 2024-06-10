import prismaClient from "../../utils/prisma-client";

export const getUserByIdRepository = async (userId: string) => {
    const data = await prismaClient.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            email: true,
            password: true,
            avatar: true,
            name: true,
        },
    });

    return data;
};
