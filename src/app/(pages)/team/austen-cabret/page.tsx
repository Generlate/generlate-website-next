import Image from "next/image";
import styles from "@/app/styles/page.module.css"
import transition from '@/app/components/transition'

export default function AustenCabret() {
  return (
    <main className={styles.austencabret}>
      <section>
        <Image src="/austen-cabret-profile.webp" alt="Austen Cabret" width="250" height="250"></Image>
        <h2>Austen Cabret</h2>
        <h4>Founder</h4>

        <p>
          Austen is Generlate&apos;s founder and responsible for the
          company&apos;s development, finances, sales and customer support. He
          alone built the front and back end.{" "}
        </p>
        <p>
          {" "}
          Before working as a fullstack engineer, Austen filled various roles
          in the architecture field, as a designer, renderer and planner.{" "}
        </p>
        <p>
          {" "}
          Austen is a self taught software engineer and earned an MLA from
          Florida International University.{" "}
        </p>
        <p>email: austencabret@generlate.com</p>
      </section>
    </main>
  );
}