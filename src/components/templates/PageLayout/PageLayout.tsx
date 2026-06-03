import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
