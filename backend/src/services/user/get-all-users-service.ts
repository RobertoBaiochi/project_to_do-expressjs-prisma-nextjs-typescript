import { getAllUsersRepository } from "../../respositories/user/get-all-users-repository";
import * as httpResponse from "../../utils/http-helper";

export const getAllUsersService = async () => {
    const data = await getAllUsersRepository();
    let response = null;

    if (data.length === 0) {
        response = await httpResponse.noContent();
        return response;
    }

    response = await httpResponse.ok(data);

    return response;
};
