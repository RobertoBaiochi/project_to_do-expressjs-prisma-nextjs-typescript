import { Request, Response } from "express";
import { getTasksTodoService } from "../../services/task/get-tasks-todo-status-service";

export const getTasksTodoController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;

    const httpResponse = await getTasksTodoService(userId);

    res.status(httpResponse.statusCode).json(httpResponse.statusCode);
};
