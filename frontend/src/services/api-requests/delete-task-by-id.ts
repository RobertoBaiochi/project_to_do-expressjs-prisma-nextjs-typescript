import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const deleteTaskById = async (taskId: string) => {
    const token = Cookies.get("token");
    try {
        await apiClient
            .delete(`task/${taskId}`, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};
