'use client'

import styles from "@/app/styles/pricing.module.css"
import transition from '@/app/components/transition'

function Pricing() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>pricing</section>
      <section className={styles.section}>free!</section>
      <section className={styles.section}>explain the business model</section>
      <section className={styles.section}>maybe tokens</section>
    </main>
  );
}

export default transition(Pricing)