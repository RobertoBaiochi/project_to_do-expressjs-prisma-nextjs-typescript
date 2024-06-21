import Cookies from "js-cookie";
import { apiClient } from "../axios/api-client";

export const deleteUserAccount = async () => {
    const token = Cookies.get("token");

    const response = await apiClient
        .delete("/user", {
            headers: { Authorization: `Token ${token}` },
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
    return response;
};
