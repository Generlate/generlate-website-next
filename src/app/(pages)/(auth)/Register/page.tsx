'use client'

import React, { SyntheticEvent, useState } from "react";
import { useRouter } from 'next/router';
import styles from "@/app/styles/register.module.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [navigate, setNavigate] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("https://api.generlate.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    // setNavigate(true);
  };

//   if (navigate) {
//     return <Navigate to="/components/login" />;
//   }

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

export default Register;
