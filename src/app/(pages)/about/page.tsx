import Link from 'next/link';
import Image from 'next/image';
import { BsClockHistory } from "react-icons/bs";
import { TbStretching } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { SlTrophy } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";
import styles from "@/app/styles/about.module.css"
// import ThreeCanvas from '@/app/components/ThreeCanvas'
import transition from '@/app/components/transition'

export default function About() {
  return (
    <main>
      <video width="1920" height="1080" autoPlay playsInline muted loop className={styles.video}>
        <source src="/advertisement.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href="#about" title="about" className={styles.a}>
        ?
      </a>
      <div className={styles.div}>
        <Link href="/" className={styles.a2}>Text -&gt; 3D!</Link>
      </div>
      <section className={styles.section1}>
        Meet Generlate, <br />a text to object generator. Your words - our
        magic.
      </section>
      <section className={styles.section2}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p className={styles.p1}>
              Say goodbye to the grind. Type. don&apos;t model. Effortlessly
              create objects from your text, at the speed of sound.
            </p>
            <h3 className={styles.h3}>
              Insanely
              <br />
              Fast
            </h3>
            <p className={styles.p2}>
              <BsClockHistory />
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p1}>
              Perfect for games, architecture, marketing - flexibility like
              never before.
            </p>
            <h3 className={styles.h3}>
              Highly
              <br />
              Versatile
            </h3>
            <p className={styles.p2}>
              <TbStretching />
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p1}>Turbocharge your productivity. Slash costs.</p>
            <h3 className={styles.h3}>
              Greater
              <br />
              Efficiency
            </h3>
            <p className={styles.p2}>
              <BiDollar />
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p1}>Compete at the top with stunning AI-powered 3D models.</p>
            <h3 className={styles.h3}>
              Stay
              <br />
              Ahead
            </h3>
            <p className={styles.p2}>
              <SlTrophy />
            </p>
          </li>
        </ul>
      </section>
      <section className={styles.section3}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            {/* <ThreeCanvas modelPath="/box_1.obj" theme={theme} className={styles.canvas}/> */}
          </div>
          <p className={styles.p3}>A tall cube</p>
        </div>

        <div className={`${styles.hiddenbottom} ${styles.div2}`}>
          <div className={styles.div3}>
            {/* <ThreeCanvas modelPath="/box_2.obj" theme={theme} className={styles.canvas}/> */}
          </div>
          <p className={styles.p3}>A cube</p>
        </div>

        <div className={`${styles.hiddenbottom} ${styles.div2}`}>
          <div className={styles.div3}>
            {/* <ThreeCanvas modelPath="/box_3.obj" theme={theme} className={styles.canvas}/> */}
          </div>
          <p className={styles.p3}>A thin cube</p>
        </div>
      </section>
      <section id="about" className={styles.section4}>
        <div className={styles.div5}>
          <div className={styles.div6}>
            <h3 className={styles.h32}>Editable:</h3>
            <p className={styles.p4}>reduce polygons, change texture or increase resolution</p>
          </div>
          <Image src="/cubes.webp" alt="cubes" width={960} height={270} className={styles.image}></Image>
        </div>

        <div className={styles.div5}>
          <div className={styles.div6}>
            <h3 className={styles.h32}>Multimodal:</h3>
            <p className={styles.p4}>generate models or textures</p>
          </div>
          <Image src="/textures.webp" alt="textures" width={960} height={270} className={styles.image}></Image>
        </div>

        <div className={styles.div5}>
          <div className={styles.div6}>
            <h3 className={styles.h32}>History:</h3>
            <p className={styles.p4}>models and prompts are recorded</p>
          </div>
          <ol className={styles.ol}>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;past generations
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A tall cube
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A cube
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A thin cube
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;etc.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}