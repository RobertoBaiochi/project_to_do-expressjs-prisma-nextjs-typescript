import { Request, Response } from "express";
import { UserModel } from "../../models/userModel";
import { createUserService } from "../../services/user/create-user-service";

export const createUserController = async (req: Request, res: Response) => {
    const bodyContent: Partial<UserModel> = req.body;

    const httpResponse = await createUserService(bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
