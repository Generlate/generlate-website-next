import Image from 'next/image';
import { BiUserCircle } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { ImExit } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { RiUserFollowFill } from "react-icons/ri";

export default function Header() {
  return (
    <div>
      <Image src="/generlate-light.webp" width={299} height={56} alt="picture of cubes"/>
      <BiUserCircle size={34} title="user options" />
      <div>
        <RiUserFollowFill size={20} />
        <TiUserAdd size={23} />
        <ImExit size={19} />
      </div>



    </div>
  );
}