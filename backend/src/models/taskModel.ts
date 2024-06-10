export interface TaskModel {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
}

export enum TaskStatus {
    TODO,
    DOING,
    DONE,
}
