import { AvatarModel } from "./avatarModel";
import { TaskModel } from "./taskModel";

export interface UserModel {
    id: string;
    email: string;
    name?: string;
    password: string;
    task: TaskModel[];
    avatar?: AvatarModel;
}
