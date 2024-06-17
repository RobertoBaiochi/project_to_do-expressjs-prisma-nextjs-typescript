import { updateTaskIndexRepository } from "../../respositories/task/update-index-task-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateTaskIndexService = async (
    taskId: string,
    taskIndex: number
) => {
    let response = null;

    if (!taskId || !taskIndex) {
        response = await HttpResponse.noContent();
        return response;
    }

    const data = await updateTaskIndexRepository(taskId, taskIndex);

    if (!data) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok({ message: "Index updated successful." });
    return response;
};
