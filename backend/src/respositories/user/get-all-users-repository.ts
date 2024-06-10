import prismaClient from "../../utils/prisma-client";

export const getAllUsersRepository = async () => {
    const data = await prismaClient.user.findMany({
        select: {
            id: true,
            email: true,
            password: true,
        },
    });

    return data;
};
