import styles from "@/app/styles/pricing.module.css"
import transition from '@/app/components/transition'

export default function Pricing() {
  return (
    <main className={styles.pricing}>
      <section className={styles.section}>pricing</section>
      <section className={styles.section}>free!</section>
      <section className={styles.section}>explain the business model</section>
      <section className={styles.section}>maybe tokens</section>
    </main>
  );
}