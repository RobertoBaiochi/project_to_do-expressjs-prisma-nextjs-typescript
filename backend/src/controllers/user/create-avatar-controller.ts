import { Request, Response } from "express";
import { createAvatarService } from "../../services/user/create-avatar-service";

export const createAvatarController = async (req: Request, res: Response) => {
    const userId = req.user_id;

    // if (!req.file?.filename) {
    //     return res.status(201).json({ message: "ok" });
    // }

    // const filename = req.file?.filename;

    const httpResponse = await createAvatarService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
