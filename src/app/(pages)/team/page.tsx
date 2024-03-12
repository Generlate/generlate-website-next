import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/page.module.css"

export default function Team() {
  return (
    <main className={styles.team}>
      <section>
        <u>Team Profiles</u>
      </section>
      <section>
        <Link href="/team/austen-cabret" title="more info">
          <Image src="/austen-cabret-profile.webp" alt="Austen Cabret" width={250} height={250}/>
          <h2>Austen Cabret</h2>
          <h4>Founder</h4>
        </Link>
      </section>
    </main>
  );
}