import { Request, Response } from "express";
import { getAllUsersService } from "../../services/user/get-all-users-service";

export const getAllUsersController = async (req: Request, res: Response) => {
    const httpResponse = await getAllUsersService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
