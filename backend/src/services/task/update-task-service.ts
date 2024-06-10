import { TaskModel } from "../../models/taskModel";
import { updateTaskRepository } from "../../respositories/task/update-task-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateTaskService = async (
    taskId: string,
    taskData: Partial<TaskModel>
) => {
    let response = null;

    if (!taskId) {
        response = await HttpResponse.noContent();
        return response;
    }

    if (!taskData.title) {
        response = await HttpResponse.badRequest("The title must be filled in");
        return response;
    }

    const data = await updateTaskRepository(taskId, taskData);

    if (!data) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok({ message: "Updated successful" });
    return response;
};
