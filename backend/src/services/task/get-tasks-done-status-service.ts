import { getTasksDoneRepository } from "../../respositories/task/get-tasks-done-status-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getTasksDoneService = async (userId: string) => {
    let response = null;

    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const data = await getTasksDoneRepository(userId);

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
