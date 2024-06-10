import { Request, Response } from "express";
import { UserModel } from "../../models/userModel";
import { authUserService } from "../../services/user/auth-user-service";

export const authUserController = async (req: Request, res: Response) => {
    const contentBody: Partial<UserModel> = req.body;

    const httpResponse = await authUserService(contentBody);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
