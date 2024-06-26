import prismaClient from "../../utils/prisma-client";

export const updateStatusTaskRepository = async (
    taskId: string,
    status: "DONE" | "DOING" | "TODO"
) => {
    const data = await prismaClient.task.updateMany({
        where: {
            id: taskId,
        },
        data: {
            status: status,
        },
    });

    return data;
};
