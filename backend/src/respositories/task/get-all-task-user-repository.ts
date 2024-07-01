import prismaClient from "../../utils/prisma-client";

export const getAllTaskUserRepository = async (userId: string) => {
    const data = await prismaClient.task.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            title: true,
            status: true,
            index: true,
            description: true,
        },
    });

    return data;
};
