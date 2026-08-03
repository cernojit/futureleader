import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Card } from "@/components/atoms/Card/Card";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Síť absolventů",
  description: "Síť absolventů programu Future Leader.",
};

export default function SitAbsolventuPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Síť absolventů</span>
          <Heading level={1} className={styles.heroText}>Future Leader nekončí posledním víkendem</Heading>
          <Heading level={3} className={`${styles.lead} ${styles.heroText}`}>
            Absolventi se mohou připojit do síťe lidí, kteří se podporují, propojují a
            společně tvoří.
          </Heading>
        </div>
      </section>

      <section className={styles.communityPanel}>
        <Card
          header={<Heading level={3}>Absolventi mohou vstoupit do komunity Sítě absolventů Future Leader, ve které:</Heading>}
          text={
            <>
              <ul className={styles.bulletList}>
                <li>se podporují,</li>
                <li>jsou propojeni na hlubší úrovni,</li>
                <li>sdílí projekty,</li>
                <li>tvoří spolupráce,</li>
                <li>inspirují se navzájem.</li>
              </ul>
            </>
          }
        />
      </section>
    </>
  );
}
