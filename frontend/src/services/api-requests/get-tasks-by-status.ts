import { cookies } from "next/headers";
import { apiClient } from "../axios/api-client";

export const getTasksByStatus = async (status: "done" | "doing" | "todo") => {
    const token = cookies().get("token")?.value;

    try {
        const response = await apiClient
            .get(`/${status}/task`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });

        return response;
    } catch (err) {
        console.error(err);
    }
};
