import prismaClient from "../../utils/prisma-client";

export const getTaskByIdRepository = async (userId: string) => {
    const data = await prismaClient.task.findFirst({
        where: {
            id: userId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            status: true,
        },
    });

    return data;
};
