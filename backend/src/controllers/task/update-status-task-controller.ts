import { Request, Response } from "express";

import { TaskStatusModel } from "../../models/taskStatusModel";
import { updateStatusTaskService } from "../../services/task/update-status-task-service";

export const updateStatusTaskController = async (
    req: Request,
    res: Response
) => {
    const taskId: string = req.params.id;
    const statusEnum: TaskStatusModel = req.body as TaskStatusModel;

    const httpResponse = await updateStatusTaskService(taskId, statusEnum);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
