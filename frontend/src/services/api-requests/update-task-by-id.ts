import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const updateTaskById = async (
    taskId: string,
    title: string,
    description?: string
) => {
    try {
        const token = Cookies.get("token");
        const response = await apiClient
            .patch(
                `/task/${taskId}`,
                {
                    title,
                    description,
                },
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
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
