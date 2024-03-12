import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { TbMessage2Up } from "react-icons/tb";
import styles from "./styles/page.module.css"

export default function Home(){
  return (
    <main className={styles.home}>
      <div>
        <p>?</p>
        <section>
          {/* {showDownloadButton && (
            <>
              <button onClick={handleDownloadClick}>Download</button>
              <ThreeCanvas modelPath={model} theme={props.theme} />
            </>
          )} */}
        </section>

        <section>
          <div></div>

          <div>
            <button title="voice input">
              <BiSolidMicrophoneAlt />
            </button>
            {/* <input
              type="text"
              placeholder="Prompt here..."
              id="generationbar"
              onKeyDown={enterKey}
            /> */}
            {/* <button onClick={handleInputClick} title="text input">
              <TbMessage2Up />
            </button> */}
          </div>
        </section>
      </div>
    </main>
  )
}