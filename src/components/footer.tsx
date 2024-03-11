import Link from 'next/link';
import { TbVector } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { IoBusinessOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <TbVector />
      <TiDocumentText />
      <IoBusinessOutline />
      <BsPeople />
      <div>
        <Link href="/news">News</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div>
        <Link href="/docs">Docs</Link>
        <Link href="/api">API</Link>
      </div>
      <div>
        <Link href="/team">Team</Link>
        <Link href="/finances">Finances</Link>
        <Link href="/legal">Legal</Link>
      </div>
      <div>
        <Link href="https://github.com/Generlate">Github</Link>,
        <Link href="https://www.youtube.com/@generlate">Youtube</Link>,
        <Link href="https://twitter.com/Generlate">Twitter</Link>,
        <Link href="https://www.linkedin.com/company/78367423/admin/feed/posts/">LinkedIn</Link>
      </div>
    </div>
  );
}