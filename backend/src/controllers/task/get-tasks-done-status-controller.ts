import { Request, Response } from "express";
import { getTasksDoneService } from "../../services/task/get-tasks-done-status-service";

export const getTasksDoneController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;

    const httpResponse = await getTasksDoneService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
