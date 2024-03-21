'use client'

import styles from "@/app/styles/finances.module.css"
import transition from '@/app/components/transition'

function Finances() {
  return (
    <main className={styles.finances}>
      <section className={styles.section}>Earnings reports</section>
    </main>
  );
}

export default transition(Finances)