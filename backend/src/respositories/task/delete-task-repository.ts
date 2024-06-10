import prismaClient from "../../utils/prisma-client";

export const deleteTaskRepository = async (taskId: string) => {
    const data = await prismaClient.task.delete({
        where: {
            id: taskId,
        },
    });

    return data;
};
