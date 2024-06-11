import { UserModel } from "../../models/userModel";
import { createUserRepository } from "../../respositories/user/create-user-repository";
import { findUserByEmail } from "../../respositories/user/find-user-by-email";
import * as HttpResponse from "../../utils/http-helper";
import { hash } from "bcrypt";

export const createUserService = async (userData: Partial<UserModel>) => {
    let response = null;

    try {
        const { email, password } = userData;

        if (!email || !password) {
            return HttpResponse.badRequest("All fields must be filled.");
        }

        const userExist = await findUserByEmail(email);

        if (userExist) {
            response = await HttpResponse.badRequest(
                "This user is already registered."
            );
            return response;
        }

        const hashPassword = await hash(password, 12);

        const user = await createUserRepository(email, hashPassword);

        if (!user) {
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
