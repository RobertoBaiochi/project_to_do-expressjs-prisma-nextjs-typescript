import styles from "./page.module.css";
import { PerfilHeader } from "./components/PerfilHeader";
import { getUserDetails } from "@/services/api-requests/get-user-details";
import { TasksSection } from "./components/TasksSection";
import { InputAddTask } from "./components/inputAddTask";

export default async function Dashboard() {
    const user = await getUserDetails();

    return (
        <main className={styles.main}>
            <PerfilHeader {...user} />
            <TasksSection />
            <InputAddTask />
        </main>
    );
}
