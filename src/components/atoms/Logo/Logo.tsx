"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoSymbol } from "./LogoSymbol";
import styles from "./Logo.module.css";

export function Logo() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/"
      className={styles.logo}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LogoSymbol hovered={hovered} />
      <span className={styles.text}>
        <span className={styles.line}>Future</span>
        <span className={styles.line}>Leader</span>
      </span>
    </Link>
  );
}
