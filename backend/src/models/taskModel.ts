import { TaskStatusModel } from "./taskStatusModel";

export interface TaskModel {
    id: string;
    title: string;
    description?: string;
    status: TaskStatusModel;
    index: number;
}
