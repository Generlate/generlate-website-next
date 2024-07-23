'use client'

import transition from '@/app/components/transition';
import styles from "@/app/styles/team.module.css";
import Image from 'next/image';
import Link from 'next/link';

function Team() {
  return (
    <main className={styles.main}>
      <section className={`${styles.section} ${styles.firstSection}`}>
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