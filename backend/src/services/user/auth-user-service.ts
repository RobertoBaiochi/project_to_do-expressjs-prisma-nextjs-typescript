import { compare } from "bcrypt";
import { UserModel } from "../../models/userModel";
import * as HttpResponse from "../../utils/http-helper";
import { sign } from "jsonwebtoken";
import { findUserByEmail } from "../../respositories/user/find-user-by-email";

export const authUserService = async (contentBody: Partial<UserModel>) => {
    let response = null;
    try {
        const { email, password } = contentBody;
        if (!email || !password) {
            response = await HttpResponse.badRequest(
                "All fields must be filled"
            );
            return response;
        }

        const user = await findUserByEmail(email);

        if (!user) {
            response = await HttpResponse.badRequest("User not found");
            return response;
        }

        const matchPassword = compare(password, user.password);

        if (!matchPassword) {
            response = await HttpResponse.badRequest("Email or password wrong");
            return response;
        }

        const token = sign(
            {
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                subject: user.id,
                expiresIn: "30d",
            }
        );

        const loginResponse = {
            id: user.id,
            email: user.email,
            token: token,
        };

        response = await HttpResponse.ok(loginResponse);

        return response;
    } catch (err) {
        response = await HttpResponse.serverError();

        return response;
    }
};
