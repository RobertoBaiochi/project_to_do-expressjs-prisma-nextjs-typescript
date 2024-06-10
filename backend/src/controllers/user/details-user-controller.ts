import { Request, Response } from "express";
import { detailsUserService } from "../../services/user/details-user-service";

export const detailsUserController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;

    const httpResponse = await detailsUserService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
