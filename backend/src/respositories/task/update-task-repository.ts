import { TaskModel } from "../../models/taskModel";
import prismaClient from "../../utils/prisma-client";

export const updateTaskRepository = async (
    taskId: string,
    taskData: Partial<TaskModel>
) => {
    const data = await prismaClient.task.update({
        where: {
            id: taskId,
        },
        data: {
            title: taskData.title,
            description: taskData.description,
        },
    });

    return data;
};
