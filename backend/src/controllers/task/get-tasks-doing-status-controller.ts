import { Request, Response } from "express";
import { getTasksDoingService } from "../../services/task/get-tasks-doing-status-service";

export const getTasksDoingController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;

    const httpResponse = await getTasksDoingService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.statusCode);
};
