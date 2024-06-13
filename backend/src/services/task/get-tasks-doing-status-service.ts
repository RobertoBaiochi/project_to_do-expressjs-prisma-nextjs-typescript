import { getTasksDoingRepository } from "../../respositories/task/get-tasks-doing-status-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getTasksDoingService = async (userId: string) => {
    let response = null;

    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const data = await getTasksDoingRepository(userId);

        if (data.length === 0) {
            response = await HttpResponse.noContent();
            return response;
        }

        response = await HttpResponse.ok(data);
        return response;
    } catch {
        response = await HttpResponse.serverError();
        return response;
    }
};
