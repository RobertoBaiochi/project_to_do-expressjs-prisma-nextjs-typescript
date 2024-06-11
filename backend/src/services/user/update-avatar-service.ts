import { updateAvatarRepository } from "../../respositories/user/update-avatar-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateAvatarService = async (userId: string, filename: string) => {
    let response = null;

    if (!userId) {
        response = HttpResponse.unauthorized();
        return response;
    }

    if (!filename) {
        response = HttpResponse.badRequest();
        return response;
    }

    const data = await updateAvatarRepository(userId, filename);

    if (!data) {
        response = HttpResponse.serverError();
        return response;
    }

    response = HttpResponse.ok({ message: "Upload successful." });
    return response;
};
