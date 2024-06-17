import prismaClient from "../../utils/prisma-client";

export const updateTaskIndexRepository = async (
    taskId: string,
    taskIndex: number
) => {
    const data = await prismaClient.task.updateMany({
        where: {
            id: taskId,
        },
        data: {
            index: taskIndex,
        },
    });

    return data;
};
