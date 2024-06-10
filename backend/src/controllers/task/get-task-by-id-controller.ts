import { Request, Response } from "express";
import { getTaskByIdService } from "../../services/task/get-task-by-id-service";

export const getTaskByIdController = async (req: Request, res: Response) => {
    const taskId: string = req.params.id;

    const httpResponse = await getTaskByIdService(taskId);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
