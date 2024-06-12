import styles from "./conta.module.css";

import { SectionForms } from "./components/SectionForms";
import { Hero } from "./components/SectionHero";

export default function ContasPage() {
    return (
        <main className={styles.main}>
            <Hero />
            <SectionForms />
        </main>
    );
}
