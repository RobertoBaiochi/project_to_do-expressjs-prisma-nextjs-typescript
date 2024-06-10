import prismaClient from "../../utils/prisma-client";

export const updateStatusTaskRepository = async (
    taskId: string,
    status: "DONE" | "DOING" | "TODO"
) => {
    const data = await prismaClient.task.update({
        where: {
            id: taskId,
        },
        data: {
            status,
        },
    });

    return data;
};
