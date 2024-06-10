import { UserModel } from "../../models/userModel";
import * as HttpResponse from "../../utils/http-helper";

export const updateUserService = async (
    userId: string,
    bodyContent: Partial<UserModel>
) => {
    const { avatar, name } = bodyContent;
    let response = null;

    if (!userId) {
        response = HttpResponse.unauthorized();
        return response;
    }

    //Esperar para utilizar o MULTER como fazer update de Imagens
};
