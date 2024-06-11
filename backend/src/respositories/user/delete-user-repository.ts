import prismaClient from "../../utils/prisma-client";

export const deleteUserRepository = async (userId: string) => {
    const data = await prismaClient.user.delete({
        where: {
            id: userId,
        },
        include: {
            task: {
                where: {
                    userId,
                },
            },
            avatar: {
                where: {
                    userId,
                },
            },
        },
    });

    return data;
};
