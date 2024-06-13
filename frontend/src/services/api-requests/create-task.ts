import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const createTaskService = async (title: string) => {
    const token = Cookies.get("token");

    const response = await apiClient
        .post("/task", {
            title,
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return;
        });

    return response;
};
