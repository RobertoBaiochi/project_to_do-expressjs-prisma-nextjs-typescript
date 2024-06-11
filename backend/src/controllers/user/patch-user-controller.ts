import { Request, Response } from "express";
import { UserModel } from "../../models/userModel";
import { updateUserService } from "../../services/user/update-user-service";

export const updateUserController = async (req: Request, res: Response) => {
    const userId = req.user_id;
    const bodyContent: Partial<UserModel> = req.body;

    const httpResponse = await updateUserService(userId, bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
