import { getAvatarByIdRepository } from "../../respositories/avatar/get-avatar-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getAvatarByIdService = async (
    userId: string,
    avatarId: string
) => {
    let response = null;

    if (!userId) {
        response = await HttpResponse.unauthorized();
        return response;
    }

    if (!avatarId) {
        response = await HttpResponse.badRequest("Avatar Id is required");
        return response;
    }

    const data = await getAvatarByIdRepository(userId, avatarId);

    if (!data) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok(data);
    return response;
};
