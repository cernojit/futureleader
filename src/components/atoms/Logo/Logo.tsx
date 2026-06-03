import Link from "next/link";
import { LogoSymbol } from "./LogoSymbol";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <LogoSymbol />
      <span className={styles.text}>
        <span className={styles.line}>Future</span>
        <span className={styles.line}>Leader</span>
      </span>
    </Link>
  );
}
