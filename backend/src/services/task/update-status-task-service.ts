import { TaskStatusModel } from "../../models/taskStatusModel";
import { updateStatusTaskRepository } from "../../respositories/task/update-status-task-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateStatusTaskService = async (
    taskId: string,
    statusEnum: TaskStatusModel
) => {
    let response = null;

    try {
        let { status } = statusEnum;

        if (!taskId) {
            response = await HttpResponse.noContent();
            return response;
        }

        const data = await updateStatusTaskRepository(taskId, status);

        if (!data) {
            response = await HttpResponse.badRequest();
            return response;
        }

        response = await HttpResponse.ok(data);
        return response;
    } catch (err) {
        response = await HttpResponse.badRequest();
        return response;
    }
};
