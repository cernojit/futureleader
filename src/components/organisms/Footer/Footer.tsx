import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./Footer.module.css";
import { LogoSymbol } from "@/components/atoms/Logo/LogoSymbol";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.org}>
          <div className={styles.brandLockup}>
            <span className={styles.name}>
              <span className={styles.logoMark}>
                <LogoSymbol hovered={false} color="currentColor" />
              </span>
              <span className={styles.brandText}>
                <span>akáda</span>
                <span className={styles.brandClaim}>nový příběh</span>
              </span>
            </span>
          </div>
          <span className={styles.subName}>AKÁDA, z.ú.</span>
          <a className={styles.tagline} href="https://www.akada.cz/" target="_blank" rel="noreferrer">https://www.akada.cz/</a>
          <span className={styles.ico}>IČO: 08744700</span>
        </div>
        <ContactInfo
          name="Klára Čebišová"
          email="info@futureleader.cz"
          phone="+420 732 602 290"
        />
        <div className={styles.copy}>
          <span>&copy; {new Date().getFullYear()} Future Leader</span>
          <span className={styles.annotation}>
            <span className={styles.annotationHeart} aria-hidden="true">♥</span>{" "}
            Vytvořila Jitka Černohorská
          </span>
        </div>
      </div>
    </footer>
  );
}
