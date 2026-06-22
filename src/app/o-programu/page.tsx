import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Divider } from "@/components/atoms/Divider/Divider";
import { Card } from "@/components/atoms/Card/Card";
import { LogoSymbol } from "@/components/atoms/Logo/LogoSymbol";
import styles from "./page.module.css";

const BENEFITS = [
  {
    title: "Větší jasno v sobě",
    description: "Pochopíte své vzorce, silné stránky i to, co vás brzdí.",
  },
  {
    title: "Autentičtější leadership a schopnost vést zdravě",
    description:
      "Naučíte se vést druhé přirozeně, bez masek a tlaku. Naučíte se vytvářet bezpečné prostředí pro druhé bez vyčerpání sebe sama.",
  },
  {
    title: "Vnitřní stabilitu a jistotu",
    description:
      "Opřete se více o sebe, svou intuici a vlastní kompas. Přestanete hledat odpovědi jen venku a začnete více důvěřovat sobě.",
  },
  {
    title: "Jasnější směr",
    description:
      "Ujasníte si další pracovní i osobní kroky. Ujasníte si, co opravdu chcete tvořit, v práci i v životě.",
  },
  {
    title: "Komunitu",
    description:
      "Potkáte lidi, kteří chtějí tvořit podobně jako vy. Lidi, se kterými nemusíte nic hrát. Propojení na hlubší úrovni.",
  },
  {
    title: "Hlubší vztahy",
    description: "K sobě, k lidem kolem i ke své práci.",
  },
  {
    title: "Praktické zkušenosti",
    description: "Program je postavený na prožitku, sdílení a reálném životě.",
  },
] as const;

const PROGRAM_TOPICS = [
  "Autenticita a identita lídra",
  "Komunikace a vztahy",
  "Systemické principy",
  "Role",
  "Spirálová dynamika",
  "Intuice, práce se sebou a se svým tělem",
  "Emoce, autenticita a vnitřní síla",
  "Cesta hrdiny",
  "Leadership nové generace",
  "Týmová spolupráce",
] as const;

const PROGRAM_SUPPORT = [
  "Podpora mentoringu",
  "Individuální zaměření",
  "sdílení v menších skupinách",
  "praktické experimenty do života",
  "komunita absolventů",
] as const;

export const metadata: Metadata = {
  title: "O programu",
  description:
    "Future Leader je devítiměsíční seberozvojový program se čtyřmi prodlouženými víkendy pro lídry s odvahou.",
};

export default function OProgramuPage() {
  return (
    <>
      <Heading level={1}>O programu</Heading>
      <Text size="lg" weight="extralight">
        Future Leader je transformační program, který propojuje sebepoznání,
        leadership a praktický život.
      </Text>

      <Divider />

      <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>Co vám program přinese</span>
        </Heading>
        <Heading level={4}>
          Ne další sadu technik, ale posun, který se propíše do toho, jak žijete,
          vedete a tvoříte.
        </Heading>
        <div className={styles.benefitsGrid}>
          {BENEFITS.map((benefit) => (
            <Card
              key={benefit.title}
              className={styles.benefitCard}
              header={<Heading level={3}>{benefit.title}</Heading>}
              text={<Text>{benefit.description}</Text>}
            />
          ))}
        </div>
      </section>

      <Divider />

      <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>Jak program probíhá</span>
        </Heading>
        <div className={styles.programIntro}>
          <Card
            className={styles.programLeadCard}
            header={<Heading level={3}>Program tvoří 4 víkendová setkání během roku.</Heading>}
            text={
              <>
                <Text>V malé skupině 12-20 lidí.</Text>
                <Text>
                  Každé z nich otevírá jiné téma leadershipu, vztahu k sobě i k druhým.
                </Text>
              </>
            }
            footer={
              <div className={styles.programMetaRow}>
                <div className={styles.programMetaCard}>
                  <span className={styles.programMetaLabel}>Formát</span>
                  <span className={styles.programMetaValue}>Čtvrtek - neděle</span>
                </div>
                <div className={styles.programMetaCard}>
                  <span className={styles.programMetaLabel}>Prostředí</span>
                  <span className={styles.programMetaValue}>V bezpečném prostoru mimo běžný provoz života.</span>
                </div>
              </div>
            }
          />
        </div>
        <div className={styles.programGrid}>
          <Card
            className={styles.programTopicsCard}
            header={<Heading level={3}>Témata programu</Heading>}
            text={
              <ul className={`${styles.bulletList} ${styles.programList}`}>
                {PROGRAM_TOPICS.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            }
          />
          <Card
            className={styles.programSupportCard}
            header={<Heading level={3}>Součástí programu jsou</Heading>}
            text={
              <ul className={`${styles.bulletList} ${styles.programList}`}>
                {PROGRAM_SUPPORT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </>
  );
}
