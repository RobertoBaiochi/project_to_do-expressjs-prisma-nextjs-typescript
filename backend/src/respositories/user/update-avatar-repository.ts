import prismaClient from "../../utils/prisma-client";

// http://localhost:3333/avatar/7a001a77-3106-41d1-855a-7dbdac65edc4_eumermo5_nov-mtLow.jpg

export const updateAvatarRepository = async (
    userId: string,
    filename: string
) => {
    const imagePath = `backend/uploads/${filename}`;
    const data = await prismaClient.avatar.update({
        where: {
            userId,
        },
        data: {
            pathname: imagePath,
        },
    });

    return data;
};
