import prismaClient from "../../utils/prisma-client";

export const getTasksDoneRepository = async (userId: string) => {
    const data = await prismaClient.task.findMany({
        where: {
            userId,
            status: "DONE",
        },
        orderBy: {
            index: "asc",
        },
    });

    return data;
};
