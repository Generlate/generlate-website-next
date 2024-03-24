'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/styles/team.module.css"
import transition from '@/app/components/transition'

function Team() {
  return (
    <main className={styles.subPage}>
      <section className={styles.section}>
        <u>Team Profiles</u>
      </section>
      <section className={styles.section}>
        <Link href="/team/austen-cabret" title="more info" className={styles.a}>
          <Image src="/austen-cabret-profile.webp" alt="Austen Cabret" width={800} height={800} className={styles.img}/>
          <h2>Austen Cabret</h2>
          <h4>Founder</h4>
        </Link>
      </section>
    </main>
  );
}

export default transition(Team)