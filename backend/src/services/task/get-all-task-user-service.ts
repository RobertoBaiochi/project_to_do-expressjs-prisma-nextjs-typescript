import { response } from "express";
import { getAllTaskUserRepository } from "../../respositories/task/get-all-task-user-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getAllTaskUserService = async (userId: string) => {
    let response = null;

    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const tasks = await getAllTaskUserRepository(userId);

        if (tasks.length === 0) {
            response = await HttpResponse.noContent();
            return response;
        }

        response = await HttpResponse.ok(tasks);
        return response;
    } catch (err) {
        response = await HttpResponse.serverError();
        return response;
    }
};
