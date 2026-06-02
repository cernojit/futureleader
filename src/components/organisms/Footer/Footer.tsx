import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.org}>
          <span className={styles.name}>AKÁDA, z.ú.</span>
          <span className={styles.tagline}>Inkubátor nových příběhů</span>
          <span className={styles.ico}>IČO: 08744700</span>
        </div>
        <ContactInfo
          name="Ivana Sládková"
          email="info@futureleader.cz"
          phone="+420 724 030 480"
        />
        <div className={styles.copy}>
          <span>&copy; {new Date().getFullYear()} Future Leader</span>
        </div>
      </div>
    </footer>
  );
}
