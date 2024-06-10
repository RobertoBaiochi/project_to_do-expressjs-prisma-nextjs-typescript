import { Request, Response } from "express";
import { deleteTaskService } from "../../services/task/delete-task-service";

export const deleteTaskController = async (req: Request, res: Response) => {
    const taskId: string = req.params.id;

    const httpResponse = await deleteTaskService(taskId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
