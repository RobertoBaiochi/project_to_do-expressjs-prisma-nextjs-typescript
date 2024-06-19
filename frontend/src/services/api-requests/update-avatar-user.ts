import Cookies from "js-cookie";
import { apiClient } from "../axios/api-client";

export const updateAvatarUser = async (
    avatar: FileList | undefined,
    avatarID: string
) => {
    try {
        const token = Cookies.get("token");

        const formData = new FormData();
        formData.append("file", avatar![0]);

        const response = await apiClient.patch(
            `/upload/${avatarID}`,
            formData,
            {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
    }
};
