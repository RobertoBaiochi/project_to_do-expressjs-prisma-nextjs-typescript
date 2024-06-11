import prismaClient from "../../utils/prisma-client";

export const findUserByEmail = async (email: string) => {
    const user = await prismaClient.user.findFirst({
        where: {
            email,
        },
    });

    return user;
};
