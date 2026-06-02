import { Logo } from "@/components/atoms/Logo/Logo";
import { Navigation } from "@/components/organisms/Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
