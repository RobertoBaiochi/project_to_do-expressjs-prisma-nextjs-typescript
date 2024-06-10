import { getTaskByIdRepository } from "../../respositories/task/get-task-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getTaskByIdService = async (taskId: string) => {
    let response = null;

    if (!taskId) {
        response = await HttpResponse.noContent();
        return response;
    }

    const data = await getTaskByIdRepository(taskId);

    if (!data) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);
    return response;
};
