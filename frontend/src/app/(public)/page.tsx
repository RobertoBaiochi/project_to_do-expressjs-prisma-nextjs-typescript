import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Product } from "./sections/Product";
import { Divisor } from "./sections/DivisorTop";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Hero />
                <Product />
            </main>
        </>
    );
}
