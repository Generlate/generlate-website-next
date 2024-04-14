'use client'

import styles from "@/app/styles/docs.module.css"
import transition from '@/app/components/transition'

function Docs() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>research</section>
      <section className={styles.section}>debugging</section>
      <section className={styles.section}>how text to 3d works (tips for better generations)</section>
    </main>
  );
}

export default transition(Docs)