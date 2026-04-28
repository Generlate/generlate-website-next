'use client'

import transition from '@/app/components/transition';
import styles from "@/app/styles/register.module.css";
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("https://api.generlate.com/v1/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    router.push('/Login');
  };

  return (
    <div className={styles.relative}>
      <form onSubmit={submit} className={styles.register}>
        <input
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default transition(Register);
