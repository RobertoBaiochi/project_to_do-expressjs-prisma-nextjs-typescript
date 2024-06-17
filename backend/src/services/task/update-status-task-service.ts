import { TaskStatusModel } from "../../models/taskStatusModel";
import { updateStatusTaskRepository } from "../../respositories/task/update-status-task-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateStatusTaskService = async (
    taskId: string,
    TaskStatusIndexModel: TaskStatusModel
) => {
    let response = null;

    try {
        let { status } = TaskStatusIndexModel;

        if (!taskId) {
            response = await HttpResponse.badRequest("Missing task ID.");
            return response;
        }

        const data = await updateStatusTaskRepository(taskId, status);

        if (!data) {
            response = await HttpResponse.serverError();
            return response;
        }

        response = await HttpResponse.ok({ message: "Status updated." });
        return response;
    } catch (err) {
        response = await HttpResponse.serverError();
        return response;
    }
};
