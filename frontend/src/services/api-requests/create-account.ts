import { apiClient } from "../axios/api-client";

export async function createAccountService(email: string, password: string) {
    try {
        const response = await apiClient
            .post("/create/user", {
                email,
                password,
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log("Usuário já existe");
            });

        return response;
    } catch (err) {
        console.log("Usuário já existe");
    }
}
