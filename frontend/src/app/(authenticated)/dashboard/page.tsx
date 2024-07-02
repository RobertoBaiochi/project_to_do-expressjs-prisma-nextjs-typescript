import styles from "./page.module.css";
import { PerfilHeader } from "./components/PerfilHeader";
import { getUserDetails } from "@/services/api-requests/get-user-details";
import { TasksSection } from "./components/TasksSection";
import { InputAddTask } from "./components/inputAddTask";
import { getTasksByStatus } from "@/services/api-requests/get-tasks-by-status";
import { UserResponseModel } from "@/app/Models/UserReponseModel";
import { EmptyTasks } from "./components/EmptyTasks";

export default async function Dashboard() {
    const user: UserResponseModel = (await getUserDetails()) || [];
    const todoTask = (await getTasksByStatus("todo")) || [];
    const doingTask = (await getTasksByStatus("doing")) || [];
    const doneTask = (await getTasksByStatus("done")) || [];

    return (
        <main className={styles.main}>
            <PerfilHeader user={user} />

            {user.task.length === 0 ? (
                <EmptyTasks />
            ) : (
                <TasksSection
                    doingTasks={doingTask}
                    doneTasks={doneTask}
                    todoTasks={todoTask}
                />
            )}
            <InputAddTask />
        </main>
    );
}
