import { Request, Response } from "express";
import { updateTaskService } from "../../services/task/update-task-service";
import { TaskModel } from "../../models/taskModel";

export const updateTaskController = async (req: Request, res: Response) => {
    const taskId: string = req.params.id;
    const taskData: Partial<TaskModel> = req.body;

    const httpResponse = await updateTaskService(taskId, taskData);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
