import { UserModel } from "../../models/userModel";
import { createUserRepository } from "../../respositories/user/create-user-repository";
import * as HttpResponse from "../../utils/http-helper";
import { hash } from "bcrypt";

export const createUserService = async (userData: Partial<UserModel>) => {
    const { email, password } = userData;

    if (!email || !password) {
        return HttpResponse.badRequest("All fields must be filled");
    }

    //to-do: verificar se o e-mail ja existe []

    const hashPassword = await hash(password, 12);

    const user = await createUserRepository(email, hashPassword);

    if (!user) {
        return HttpResponse.serverError();
    }

    return HttpResponse.created();
};
