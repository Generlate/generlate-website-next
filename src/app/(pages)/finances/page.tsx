'use client'

import styles from "@/app/styles/finances.module.css"
import transition from '@/app/components/transition'

function Finances() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>Earnings reports will be found here.</section>
    </main>
  );
}

export default transition(Finances)