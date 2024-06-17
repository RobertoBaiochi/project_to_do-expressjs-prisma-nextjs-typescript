export interface ResponseTaskModel {
    id: string;
    title: string;
    description?: string;
    status: "TODO" | "DOING" | "DONE";
    index: number;
}
