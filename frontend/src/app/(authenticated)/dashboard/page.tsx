"use client";
import { logoutRemoveToken } from "@/services/api-requests/logout-remove-token";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = () => {
        logoutRemoveToken();
        router.push("/");
    };

    return (
        <main className={styles.main}>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </main>
    );
}
