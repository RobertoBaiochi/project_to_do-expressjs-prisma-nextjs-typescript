import Cookies from "js-cookie";
import { apiClient } from "../axios/api-client";

export async function loginToken(email: string, password: string) {
    const response = await apiClient
        .post("/login/user", {
            email,
            password,
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return;
        });

    const { token } = response;

    Cookies.set("token", token, { expires: 30 });

    apiClient.defaults.headers.common["Authorization"] = `Token ${token}`;

    return !!response;
}
