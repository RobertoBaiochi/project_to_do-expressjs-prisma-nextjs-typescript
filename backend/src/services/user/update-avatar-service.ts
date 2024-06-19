import { updateAvatarRepository } from "../../respositories/user/update-avatar-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateAvatarService = async (
    userId: string,
    avatarId: string,
    filename: string | undefined
) => {
    let response = null;

    if (!userId) {
        response = await HttpResponse.unauthorized();
        return response;
    }

    if (!avatarId) {
        response = await HttpResponse.badRequest(
            "Avatar ID necessary for update."
        );
        return response;
    }

    if (!filename) {
        response = await HttpResponse.noContent();
        return response;
    }

    const data = await updateAvatarRepository(userId, avatarId, filename);

    if (!data) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok({ message: "Update Successful" });
    return response;
};
