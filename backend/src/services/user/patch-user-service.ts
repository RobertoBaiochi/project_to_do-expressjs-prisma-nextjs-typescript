import { UserModel } from "../../models/userModel";
import { getUserByIdRepository } from "../../respositories/user/get-user-by-id-repository";
import { updateUserRepository } from "../../respositories/user/patch-user-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updateUserService = async (
    userId: string,
    bodyContent: Partial<UserModel>
) => {
    const { name } = bodyContent;
    let response = null;

    if (!userId) {
        response = await HttpResponse.unauthorized();
        return response;
    }

    const userExist = await getUserByIdRepository(userId);

    if (!userExist) {
        response = await HttpResponse.badRequest();
        return response;
    }

    if (!name) {
        response = await HttpResponse.noContent();
        return response;
    }

    const data = await updateUserRepository(userId, name);

    if (!data) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok({ message: "Updated successful." });

    return response;
};
