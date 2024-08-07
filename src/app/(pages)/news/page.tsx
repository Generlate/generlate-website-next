'use client'

import styles from "@/app/styles/news.module.css"
import "@/app/styles/globals.css"
import transition from '@/app/components/transition'

function News() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h2>Model generation now uses .glb files (replacing .off)</h2>
                <p>04/13/2024</p>
                <p>description</p>
            </section>
            <section className={styles.section}>
                <h2>The back end is up!</h2>
                <p>02/04/2024</p>
                <p>description</p>
            </section>
            <section className={styles.section}>
                <h2>The front end is up!</h2>
                <p>01/09/2024</p>
                <p>description</p>
            </section>
            <section className={styles.section}>
                <h2>We built a neural net!</h2>
                <p>08/01/2023</p>
                <p>description</p>
            </section>
        </main>
    );
}

export default transition(News)
