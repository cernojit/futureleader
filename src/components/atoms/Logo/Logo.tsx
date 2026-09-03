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
      <span className={styles.symbolWrap}>
        <LogoSymbol hovered={hovered} />
      </span>
      <span className={styles.text}>
        <span>Future Leader</span>
        <span className={styles.tagline}>nová generace</span>
      </span>
    </Link>
  );
}
