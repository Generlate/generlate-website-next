import styles from "@/app/styles/news.module.css"
import transition from '@/app/components/transition'

export default function News() {
  return (
    <main className={styles.news}>
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