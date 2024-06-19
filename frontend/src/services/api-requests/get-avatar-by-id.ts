import { AvatarModel } from "@/app/Models/AvatarModel";
import { apiClient } from "../axios/api-client";
import Cookies from "js-cookie";

export const getAvatarById = async (avatarId: string): Promise<AvatarModel> => {
    try {
        const token = Cookies.get("token");

        const response: AvatarModel = await apiClient
            .get(`/avatar/${avatarId}`, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.error(err);
            });

        return response;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch avatar");
    }
};
