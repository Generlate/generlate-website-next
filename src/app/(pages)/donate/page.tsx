'use client'

import transition from '@/app/components/transition';
import styles from "@/app/styles/donate.module.css";
import Image from "next/image";
import Script from 'next/script';
import { useEffect, useState } from 'react';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function Donate() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Image src="/austen-cabret-profile.webp" alt="Austen Cabret" width="200" height="200" className={styles.img} />
        <p className={styles.p}>Your donation directly helps us build Generlate and post videos.</p>
      </div>

      <div className={styles.div}>
        <Script 
          src="https://js.stripe.com/v3/buy-button.js" 
          strategy="afterInteractive" 
        />

        {isMounted && (
          <stripe-buy-button
            className={styles.stripe}
            buy-button-id="buy_btn_1PkKzFAYvBPxUj4WFNSNSHbq"
            publishable-key="pk_live_51PkBqUAYvBPxUj4W2c1cu9HfxP15BeRx3ZgQp8XBwAXAzegzFGFzoXhDLQd06mzdWsn7Nz8g5FWQ7yQKpRHzGmqi00SSNfcqgW"
          />
        )}
      </div>
    </main>
  );
}

export default transition(Donate)