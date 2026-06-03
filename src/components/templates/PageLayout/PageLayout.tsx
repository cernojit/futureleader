import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      {/* Decorative coral circles from brand identity */}
      <div className={styles.decorTopLeft} aria-hidden="true" />
      <div className={styles.decorBottomRight} aria-hidden="true" />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
