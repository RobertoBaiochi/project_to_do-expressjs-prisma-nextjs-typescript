import { getUserByIdRepository } from "../../respositories/user/get-user-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const detailsUserService = async (userId: string) => {
    let response = null;
    try {
        if (!userId) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        const user = await getUserByIdRepository(userId);

        if (!user) {
            response = await HttpResponse.unauthorized();
            return response;
        }

        response = await HttpResponse.ok(user);
        return response;
    } catch (err) {
        response = await HttpResponse.serverError();
        return response;
    }
};
