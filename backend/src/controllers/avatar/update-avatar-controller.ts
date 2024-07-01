import { Request, Response } from "express";
import { updateAvatarService } from "../../services/avatar/update-avatar-service";

export const updateAvatarController = async (req: Request, res: Response) => {
    const userId = req.user_id;
    const avatarId = req.params.id;
    const filename = req.file?.filename;

    console.log(userId);
    console.log(avatarId);
    console.log(filename);

    const httpResponse = await updateAvatarService(userId, avatarId, filename);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
