import { Request, Response } from "express";
import { getAvatarByIdService } from "../../services/avatar/get-avatar-by-id-service";

export const getAvatarByIdController = async (req: Request, res: Response) => {
    const userId = req.user_id;

    const avatarId = req.params.id;

    const httpResponse = await getAvatarByIdService(userId, avatarId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
