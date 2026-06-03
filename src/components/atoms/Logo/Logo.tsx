import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/logo-symbol.svg"
        alt=""
        width={40}
        height={37}
        priority
        className={styles.symbol}
      />
      <span className={styles.text}>
        <span className={styles.line}>Future</span>
        <span className={styles.line}>Leader</span>
      </span>
    </Link>
  );
}
