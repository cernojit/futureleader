import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import { DecorativeShapes } from "@/components/atoms/DecorativeShapes/DecorativeShapes";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <DecorativeShapes />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
