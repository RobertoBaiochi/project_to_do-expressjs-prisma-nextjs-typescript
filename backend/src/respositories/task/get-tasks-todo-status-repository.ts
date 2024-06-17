import prismaClient from "../../utils/prisma-client";

export const getTasksTodoRepository = async (userId: string) => {
    const data = await prismaClient.task.findMany({
        where: {
            userId,
            status: "TODO",
        },
        orderBy: {
            index: "asc",
        },
    });

    return data;
};
