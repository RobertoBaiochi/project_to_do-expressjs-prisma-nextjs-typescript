import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/delete-user-service";

export const deleteUserController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;

    const httpResponse = await deleteUserService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
