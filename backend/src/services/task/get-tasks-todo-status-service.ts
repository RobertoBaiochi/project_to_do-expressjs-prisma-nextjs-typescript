import { getTasksTodoRepository } from "../../respositories/task/get-tasks-todo-status-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getTasksTodoService = async (userId: string) => {
    let response = null;

    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const data = await getTasksTodoRepository(userId);

        response = await HttpResponse.ok(data);
        return response;
    } catch {
        response = await HttpResponse.serverError();
        return response;
    }
};
