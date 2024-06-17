import { Request, Response } from "express";
import { updateTaskIndexService } from "../../services/task/update-index-task-service";

export const updateTaskIndexController = async (
    req: Request,
    res: Response
) => {
    const taskId = req.params.id;
    const taskIndex = req.body.index;

    const httpResponse = await updateTaskIndexService(taskId, taskIndex);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
