import Image from 'next/image';
import Link from 'next/link';
import { BiUserCircle } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { ImExit } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { RiUserFollowFill } from "react-icons/ri";
import styles from "@/app/styles/page.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/about">
        <Image src="/generlate-light.webp" width={299} height={56} alt="picture of cubes"/>
      </Link>
      <div>
        <button>
          <BiUserCircle size={34} title="user options" />
          <VscColorMode />
          <RiUserFollowFill size={20} />
          <TiUserAdd size={23} />
          <ImExit size={19} />
        </button>
        <form>
          <div></div>
          <div></div>
        </form>
      </div>
    </header>
  );
}