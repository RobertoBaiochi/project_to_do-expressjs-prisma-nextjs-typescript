export interface UpdateUserModel {
    id: string;
    email: string;
    password: string;
    avatar: FileList;
    name: string | null;
    task: any[];
}
