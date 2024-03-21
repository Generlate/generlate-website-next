'use client'

import React, { SyntheticEvent, useState, useContext, useEffect, use } from "react";
import { useRouter } from 'next/navigation';
import styles from "@/app/styles/login.module.css"
import { AuthContext } from "@/app/(pages)/layout";
import transition from '@/app/components/transition'


const Login = (/*props: { setName: (name: string) => void }*/) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { name, setName } = useContext(AuthContext);
  const router = useRouter();

  const Navigate = () => {
    router.push('/');
  }



  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("https://api.generlate.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password
      })
    });

    const content = await response.json();

    if (response.ok) {
      setName(content.name);

    } else {
      console.error("Login failed");
      return;
    }

    Navigate();
    setName("");
  };



  return (
    <div className={styles.relative}>
      <form onSubmit={submit} className={styles.login}>
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

        <button type="submit">Sign in</button>
      </form>
    </div>

  );
};

export default transition(Login);

