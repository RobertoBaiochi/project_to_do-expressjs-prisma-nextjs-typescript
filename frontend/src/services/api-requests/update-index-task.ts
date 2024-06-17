import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const updateIndexTask = async (taskId: string, taskIndex: number) => {
    const token = Cookies.get("token");

    console.log("index", taskIndex);

    try {
        const response = await apiClient
            .patch(
                `/index/task/${taskId}`,
                {
                    index: taskIndex,
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
