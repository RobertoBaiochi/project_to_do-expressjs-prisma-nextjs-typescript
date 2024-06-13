import { AvatarModel } from "./AvatarModel";

export interface UserResponseModel {
    id: string;
    email: string;
    password: string;
    avatar: AvatarModel;
    name: string | null;
    task: any[];
}
