'use client'

import styles from "@/app/styles/api.module.css"
import transition from '@/app/components/transition'

function Api() {
  return (
    <main className={styles.main}>
        <section className={styles.section}>how to set up the api: - login - PUT to text_input directory (will trigger a model generation) - get from generated_model directory</section>
        <section className={styles.section}>what does it let you do? Convert your text to an object.</section>
    </main>
  );
}

export default transition(Api)