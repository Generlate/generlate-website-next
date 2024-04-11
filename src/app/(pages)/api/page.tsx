'use client'

import styles from "@/app/styles/api.module.css"
import transition from '@/app/components/transition'

function Api() {
  return (
    <main className={styles.main}>
        <section className={styles.section}>how to set up the api</section>
        <section className={styles.section}>what does it let you do?</section>
    </main>
  );
}

export default transition(Api)