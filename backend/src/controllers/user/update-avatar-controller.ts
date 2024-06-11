import { Request, Response } from "express";
import { updateAvatarService } from "../../services/user/update-avatar-service";

export const updateAvatarController = async (req: Request, res: Response) => {
    const userId = req.user_id;
    const filename = req.file!.filename;

    const httpResponse = await updateAvatarService(userId, filename);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
