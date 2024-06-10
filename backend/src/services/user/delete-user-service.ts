import { deleteUserRepository } from "../../respositories/user/delete-user-repository";
import { getUserByIdRepository } from "../../respositories/user/get-user-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const deleteUserService = async (userId: string) => {
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

    const isDelete = await deleteUserRepository(userId);

    if (!isDelete) {
        response = await HttpResponse.serverError();
        return response;
    }

    response = await HttpResponse.ok({
        message: "Deleted successful",
    });

    return response;
};
