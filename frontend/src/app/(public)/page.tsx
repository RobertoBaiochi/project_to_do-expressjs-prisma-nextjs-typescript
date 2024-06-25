import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Product } from "./sections/Product";
import { About } from "./sections/About";
import { Cta } from "./sections/CTA";
import { Testimonial } from "./sections/Testimonial";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Hero />
                <Product />
                <About />
                <Cta />
                <Testimonial />
            </main>
            <Footer />
        </>
    );
}
