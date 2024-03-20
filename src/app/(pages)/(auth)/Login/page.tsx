'use client'

import React, { SyntheticEvent, useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "@/app/styles/login.module.css"
import { AuthContext } from "@/app/(pages)/layout";


const Login = (/*props: { setName: (name: string) => void }*/) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const { name, setName } = useContext(AuthContext);

  // useEffect(() => {
  //       setName('Austen');
  //       console.log('name is ', name);

  //   });

  console.log('name is ', name);


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

    // setNavigate(true);
    setName(content.name);
    // setName(``);
  };

  // if (navigate) {
  //   return <Navigate to="/" />;
  //  }

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

export default Login;

