import { apiClient } from "../axios/api-client";
import { cookies } from "next/headers";

export const getUserDetails = async () => {
    const token = cookies().get("token")?.value;

    try {
        const response = await apiClient
            .get("/me", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log("Não veio o Token");
            });

        return response;
    } catch (err) {
        console.log("Aqui fudeu mesmo");
    }
};
