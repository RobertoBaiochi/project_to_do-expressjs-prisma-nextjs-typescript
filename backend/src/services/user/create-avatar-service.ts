import { createAvatarRepository } from "../../respositories/user/create-avatar-repository";
import * as HttpResponse from "../../utils/http-helper";

export const createAvatarService = async (userId: string) => {
    let response = null;

    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const data = await createAvatarRepository(userId);

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
