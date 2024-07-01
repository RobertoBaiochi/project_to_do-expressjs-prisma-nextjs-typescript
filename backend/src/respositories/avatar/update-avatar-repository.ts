import prismaClient from "../../utils/prisma-client";

export const updateAvatarRepository = async (
    userId: string,
    avatarId: string,
    filename: string
) => {
    const data = await prismaClient.avatar.update({
        where: {
            id: avatarId,
            userId,
        },
        data: {
            pathname: `http://localhost:3333/avatar/${filename}`,
        },
    });

    return data;
};
