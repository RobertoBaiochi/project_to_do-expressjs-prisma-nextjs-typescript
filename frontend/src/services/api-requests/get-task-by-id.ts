import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const getTaskById = async (taskId: string) => {
    const token = Cookies.get("token");

    const response = await apiClient
        .get(`/task/${taskId}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });

    return response;
};
