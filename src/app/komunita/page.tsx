import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Komunita",
  description: "Komunita programu Future Leader.",
};

export default function KomunitaPage() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Komunita absolventů</span>
        <Heading level={1}>Future Leader nekončí posledním víkendem</Heading>
        <Text size="lg" weight="extralight" className={styles.lead}>
          Absolventi vstupují do komunity lidí, kteří se podporují, propojují a
          společně tvoří.
        </Text>
      </section>

      <section className={styles.communityPanel}>
        <Text className={styles.panelIntro}>
          Absolventi vstupují do komunity lidí, kteří:
        </Text>
        <ul className={styles.list}>
          <li>se podporují,</li>
          <li>propojují,</li>
          <li>sdílí projekty,</li>
          <li>tvoří spolupráce,</li>
          <li>inspirují se navzájem.</li>
        </ul>
      </section>
    </>
  );
}
