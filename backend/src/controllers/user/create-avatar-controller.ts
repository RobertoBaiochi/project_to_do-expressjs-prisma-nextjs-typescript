import { Request, Response } from "express";
import { createAvatarService } from "../../services/user/create-avatar-service";

export const createAvatarController = async (req: Request, res: Response) => {
    const userId = req.user_id;

    const httpResponse = await createAvatarService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
