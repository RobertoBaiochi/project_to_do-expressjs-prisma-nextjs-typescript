import Cookies from "js-cookie";
import { apiClient } from "../axios/api-client";

export const updateUserNameById = async (userId: string, name: string) => {
    try {
        const token = Cookies.get("token");

        const response = await apiClient
            .patch(
                `/user/${userId}`,
                {
                    name,
                },
                {
                    headers: { Authorization: `Token ${token}` },
                }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.error(err);
            });

        return response;
    } catch (err) {
        console.error(err);
    }
};
