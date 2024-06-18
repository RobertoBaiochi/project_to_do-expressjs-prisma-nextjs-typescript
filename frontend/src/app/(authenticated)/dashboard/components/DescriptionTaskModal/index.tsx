"use client";

import { getTaskById } from "@/services/api-requests/get-task-by-id";
import { useEffect, useState } from "react";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";

interface DescriptionTaskProps {
    taskId: string;
}

export const DescriptionTaskModal = ({ taskId }: DescriptionTaskProps) => {
    const [task, setTask] = useState<ResponseTaskModel>();

    useEffect(() => {
        const fetch = async () => {
            const result = await getTaskById(taskId);
            setTask(result);
        };

        fetch();
    }, [taskId, setTask]);

    return (
        <article>
            <p>{task?.description}</p>
        </article>
    );
};
