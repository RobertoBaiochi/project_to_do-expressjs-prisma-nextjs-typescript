import { Request, Response } from "express";
import { getAllTaskUserService } from "../../services/task/get-all-task-user-service";

export const getAllTaskUserController = async (req: Request, res: Response) => {
    const userId = req.user_id;

    const httpResponse = await getAllTaskUserService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
