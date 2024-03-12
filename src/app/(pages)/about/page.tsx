import Link from 'next/link';
import Image from 'next/image';
import { BsClockHistory } from "react-icons/bs";
import { TbStretching } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { SlTrophy } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";
import styles from "../../styles/page.module.css"

export default function About() {
  return (
    <main className={styles.about}>
      <video width="1920" height="1080" autoPlay playsInline muted loop>
        <source src="/advertisement.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href="#about" title="about">
        ?
      </a>
      <div>
        <Link href="/">Text -&gt; 3D!</Link>
      </div>
      <section className="hidden">
        Meet Generlate, <br />a text to object generator. Your words - our
        magic.
      </section>
      <section className="hidden">
        <ul>
          <li>
            <p>
              Say goodbye to the grind. Type. don&apos;t model. Effortlessly
              create objects from your text, at the speed of sound.
            </p>
            <h3>
              Insanely
              <br />
              Fast
            </h3>
            <p>
              <BsClockHistory />
            </p>
          </li>
          <li>
            <p>
              Perfect for games, architecture, marketing - flexibility like
              never before.
            </p>
            <h3>
              Highly
              <br />
              Versatile
            </h3>
            <p>
              <TbStretching />
            </p>
          </li>
          <li>
            <p>Turbocharge your productivity. Slash costs.</p>
            <h3>
              Greater
              <br />
              Efficiency
            </h3>
            <p>
              <BiDollar />
            </p>
          </li>
          <li>
            <p>Compete at the top with stunning AI-powered 3D models.</p>
            <h3>
              Stay
              <br />
              Ahead
            </h3>
            <p>
              <SlTrophy />
            </p>
          </li>
        </ul>
      </section>
      <section>
        <div className="hiddenbottom">
          <div>
            {/* <ThreeCanvas modelPath="/box_1.obj" theme={theme} /> */}
          </div>
          <p>A tall cube</p>
        </div>

        <div className="hiddenbottom">
          <div>
            {/* <ThreeCanvas modelPath="/box_2.obj" theme={theme} /> */}
          </div>
          <p>A cube</p>
        </div>

        <div className="hiddenbottom">
          <div>
            {/* <ThreeCanvas modelPath="/box_3.obj" theme={theme} /> */}
          </div>
          <p>A thin cube</p>
        </div>
      </section>
      <section id="about" className="hiddenbottom">
        <div>
          <div>
            <h3>Editable:</h3>
            <p>reduce polygons, change texture or increase resolution</p>
          </div>
          <Image src="/cubes.webp" alt="cubes" width={960} height={270}></Image>
        </div>

        <div>
          <div>
            <h3>Multimodal:</h3>
            <p>generate models or textures</p>
          </div>
          <Image src="/textures.webp" alt="textures" width={960} height={270}></Image>
        </div>

        <div>
          <div>
            <h3>History:</h3>
            <p>models and prompts are recorded</p>
          </div>
          <ol>
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