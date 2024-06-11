import { deleteTaskRepository } from "../../respositories/task/delete-task-repository";
import { getTaskByIdRepository } from "../../respositories/task/get-task-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const deleteTaskService = async (taskId: string) => {
    let response = null;

    try {
        if (!taskId) {
            response = await HttpResponse.badRequest("Missing task ID.");
            return response;
        }

        const taskExist = await getTaskByIdRepository(taskId);

        if (!taskExist) {
            response = await HttpResponse.badRequest("Task don't find.");
            return response;
        }

        const isDeleted = await deleteTaskRepository(taskId);

        if (!isDeleted) {
            response = await HttpResponse.serverError();
            return response;
        }

        response = await HttpResponse.ok({ message: "Deleted successful." });

        return response;
    } catch (err) {
        response = await HttpResponse.serverError();
        return response;
    }
};
