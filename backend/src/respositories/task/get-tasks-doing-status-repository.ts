import prismaClient from "../../utils/prisma-client";

export const getTasksDoingRepository = async (userId: string) => {
    const data = await prismaClient.task.findMany({
        where: {
            userId,
            status: "DOING",
        },
    });

    return data;
};
