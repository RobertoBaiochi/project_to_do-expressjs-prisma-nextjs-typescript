import { getAllUsersRepository } from "../../respositories/user/get-all-users-repository";
import * as httpResponse from "../../utils/http-helper";

export const getAllUsersService = async () => {
    let response = null;

    try {
        const data = await getAllUsersRepository();
        if (data.length === 0) {
            response = await httpResponse.noContent();
            return response;
        }

        response = await httpResponse.ok(data);

        return response;
    } catch (err) {
        response = await httpResponse.serverError();

        return response;
    }
};
