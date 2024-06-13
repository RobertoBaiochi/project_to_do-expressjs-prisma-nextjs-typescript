import prismaClient from "../../utils/prisma-client";

export const getTasksTodoRepository = async (userId: string) => {
    const data = await prismaClient.task.findMany({
        where: {
            userId,
            status: "TODO",
        },
    });

    return data;
};
