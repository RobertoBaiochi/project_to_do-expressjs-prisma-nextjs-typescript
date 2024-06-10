import prismaClient from "../../utils/prisma-client";

export const createTaskRepository = async (userId: string, title: string) => {
    const data = await prismaClient.task.create({
        data: {
            title,
            userId,
        },
    });

    return data;
};
