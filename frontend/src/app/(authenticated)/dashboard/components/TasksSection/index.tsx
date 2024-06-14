"use client";

import { getAllTasksUser } from "@/services/api-requests/get-all-tasks-user";
import styles from "./tasks.module.css";
import { TasksColumns } from "../TasksColumns";
import { getTasksByStatus } from "@/services/api-requests/get-tasks-by-status";
import { ResponseTaskModel } from "@/app/Models/ResponseTaskModel";
import { useState } from "react";

interface TasksSectionProps {
    todoTasks: ResponseTaskModel[];
    doingTasks: ResponseTaskModel[];
    doneTasks: ResponseTaskModel[];
}

export const TasksSection = ({
    todoTasks,
    doingTasks,
    doneTasks,
}: TasksSectionProps) => {
    const [activeId, setActiveId] = useState<string>("");

    return (
        <section className={styles.section_container}>
            <TasksColumns
                title="🎯 To-do"
                tasks={todoTasks}
                status="TODO"
                setActiveId={setActiveId}
                activeId={activeId}
            />
            <TasksColumns
                title="🚀 Doing"
                tasks={doingTasks}
                status="DOING"
                setActiveId={setActiveId}
                activeId={activeId}
            />
            <TasksColumns
                title="🔥 Done"
                tasks={doneTasks}
                status="DONE"
                setActiveId={setActiveId}
                activeId={activeId}
            />
        </section>
    );
};
