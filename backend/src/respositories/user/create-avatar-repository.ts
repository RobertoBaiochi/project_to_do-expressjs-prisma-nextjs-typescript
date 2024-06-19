import prismaClient from "../../utils/prisma-client";

// http://localhost:3333/avatar/a21c5f46-1a4f-4fa0-9c44-ff456ffe52e2.png

export const createAvatarRepository = async (userId: string) => {
    const data = await prismaClient.avatar.create({
        data: {
            pathname: "http://localhost:3333/avatar/default.svg",
            userId: userId,
        },
    });

    return data;
};
