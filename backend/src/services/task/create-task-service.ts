import { TaskModel } from "../../models/taskModel";
import { createTaskRepository } from "../../respositories/task/create-task-repository";
import * as HttpResponse from "../../utils/http-helper";

export const createTaskService = async (
    userId: string,
    taskContent: Partial<TaskModel>
) => {
    let response = null;

    try {
        const { title } = taskContent;
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        if (!title) {
            response = await HttpResponse.badRequest(
                "The title must be filled in"
            );
            return response;
        }

        const data = await createTaskRepository(userId, title);

        if (!data) {
            response = await HttpResponse.serverError();
            return response;
        }

        response = await HttpResponse.created();

        return response;
    } catch (err) {
        response = await HttpResponse.serverError();
        return response;
    }
};
