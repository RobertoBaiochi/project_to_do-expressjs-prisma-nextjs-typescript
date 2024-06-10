import { compare } from "bcrypt";
import { UserModel } from "../../models/userModel";
import * as HttpResponse from "../../utils/http-helper";
import prismaClient from "../../utils/prisma-client";
import { sign } from "jsonwebtoken";

export const authUserService = async (contentBody: Partial<UserModel>) => {
    const { email, password } = contentBody;
    let response = null;

    if (!email || !password) {
        response = await HttpResponse.badRequest();
        return response;
    }

    //to-do: Verificar se o usuário não existe -- REFATORAR
    const user = await prismaClient.user.findFirst({
        where: {
            email,
        },
    });

    if (!user) {
        response = await HttpResponse.badRequest("User not found");
        return response;
    }

    const matchPassword = compare(password, user.password);

    if (!matchPassword) {
        response = await HttpResponse.badRequest("Email or password wrong");
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
};
