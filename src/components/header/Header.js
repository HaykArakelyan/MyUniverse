import React from 'react'
import styles from "./header.module.css"
import { Link, useNavigate } from "react-router-dom";

global.balance = 0;

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div
        onClick={() => navigate("/", { replace: true })}
        className={styles.logo}
      >
        <h1>My Universe</h1>
      </div>
      <div className={styles.tabbar}>
        <ul>
          <li><Link className={styles.a} to={"/"}>Home</Link></li>
          <li><Link className={styles.a} to={"/about"}>About Us</Link></li>
          <li><Link className={styles.a} to={"/contact"}>Contact Us</Link></li>
          <li><Link className={styles.a} to={"/donate"}>Donate</Link></li>
          <li><Link className={styles.a} to={"/help"}>Help</Link></li>
        </ul>

      </div>
      <div className={styles.balance}>
        <p>
          MY TOTTAL DONATIONS: {global.balance}$
        </p>
      </div>

    </div>
  )
}
