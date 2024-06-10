import { Request, Response } from "express";
import { createTaskService } from "../../services/task/create-task-service";
import { TaskModel } from "../../models/taskModel";

export const createTaskController = async (req: Request, res: Response) => {
    const userId: string = req.user_id;
    const taskContent: Partial<TaskModel> = req.body;

    const httpResponse = await createTaskService(userId, taskContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
