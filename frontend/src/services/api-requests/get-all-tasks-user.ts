import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { apiClient } from "../axios/api-client";
import { cookies } from "next/headers";

export const getAllTasksUser = async () => {
    const token = cookies().get("token")?.value;
    try {
        const response = await apiClient
            .get("/task", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return console.error(err);
            });

        return response;
    } catch (err) {
        return console.error(err);
    }
};
