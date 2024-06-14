import prismaClient from "../../utils/prisma-client";

export const updateStatusTaskRepository = async (
    taskId: string,
    status: "DONE" | "DOING" | "TODO"
) => {
    console.log(status);
    console.log(taskId);

    const data = await prismaClient.task.update({
        where: {
            id: taskId,
        },
        data: {
            status: status,
        },
    });

    return data;
};
