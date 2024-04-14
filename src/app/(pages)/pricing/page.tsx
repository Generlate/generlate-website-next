'use client'

import styles from "@/app/styles/pricing.module.css"
import transition from '@/app/components/transition'

function Pricing() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>While we discover pricing that satisfies all parties, please enjoy free use of Generlate. At this early stage, data acquisition and model development is prioritized over profit.</section>
      <section className={styles.section}>Our API is in development. When finished, it will be callable for a metered fee (tokens). More information can be found <a href="/api">here.</a></section>
    </main>
  );
}

export default transition(Pricing)