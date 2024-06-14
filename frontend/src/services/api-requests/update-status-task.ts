import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const updateStatusTask = async (
    taskId: string,
    status: "TODO" | "DOING" | "DONE"
) => {
    const token = Cookies.get("token");

    console.log("SERVICE - status", status);
    console.log("SERVICE - ID", taskId);
    try {
        const response = await apiClient
            .patch(
                `/taskstatus/${taskId}`,
                {
                    status: status,
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
