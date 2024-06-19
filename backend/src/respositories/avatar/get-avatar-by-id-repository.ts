import prismaClient from "../../utils/prisma-client";

export const getAvatarByIdRepository = async (
    userId: string,
    avatarId: string
) => {
    const data = await prismaClient.avatar.findFirst({
        where: {
            id: avatarId,
            userId: userId,
        },
        select: {
            pathname: true,
        },
    });

    return data;
};
