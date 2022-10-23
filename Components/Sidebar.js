import React from "react";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
