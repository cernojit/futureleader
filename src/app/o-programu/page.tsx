import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Button } from "@/components/atoms/Button/Button";
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
    title: "Hlubší vztahy",
    description: "K sobě, k lidem kolem i ke své práci.",
  },
  {
    title: "Komunitu",
    description:
      "Potkáte lidi, kteří chtějí tvořit podobně jako vy. Lidi, se kterými nemusíte nic hrát. Propojení na hlubší úrovni.",
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
  "Týmová spolupráce",
] as const;

const PROGRAM_SUPPORT = [
  "Individuální zaměření",
  "Sdílení v menších skupinách",
  "Doporučení na zkušené mentory a průvodce",
  "Praktické experimenty do života",
  "Síť absolventů",
] as const;

export const metadata: Metadata = {
  title: "O programu",
  description:
    "Future Leader je devítiměsíční seberozvojový program se čtyřmi prodlouženými víkendy pro lídry s odvahou.",
};

export default function OProgramuPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>O programu</span>
          <Heading level={1} className={styles.heroText}>Future Leader je transformační program nové generace</Heading>
          <Text size="lg" weight="extralight" className={`${styles.lead} ${styles.heroText}`}>
            Propojuje sebepoznání, leadership a praktický život v bezpečném prostoru,
            kde můžete růst bez masek a v souladu se sebou.
          </Text>
        </div>
      </section>

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
          {BENEFITS.map((benefit) => {
            const isBenchCard = benefit.title === "Vnitřní stabilitu a jistotu";
            const isRelationshipCard = benefit.title === "Hlubší vztahy";

            return (
              <Card
                key={benefit.title}
                className={`${styles.benefitCard} ${isBenchCard ? styles.benefitBenchCard : ""} ${isRelationshipCard ? styles.benefitRelationshipCard : ""}`.trim()}
                header={<Heading level={3}>{benefit.title}</Heading>}
                text={<Text>{benefit.description}</Text>}
                footer={
                  benefit.title === "Větší jasno v sobě" ? (
                    <span className={styles.benefitExperienceBadge}>10 let zkušeností</span>
                  ) : undefined
                }
              />
            );
          })}
          <article className={styles.benefitPhotoCard}>
            <a href="/nezavazna-prihlaska" className={styles.benefitApplyBubble}>
              PŘIJÍMÁME
              <br />
              PŘIHLÁŠKY
            </a>
          </article>
        </div>
      </section>

      <Divider />

      <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>PROČ FUTURE LEADER</span>
        </Heading>
        <Text>Future Leader je transformační rozvojový program pro mladé lídry, podnikatele, manažery, tvůrce a všechny, kteří chtějí žít i tvořit autenticky, vědomě a v souladu se svými hodnotami.</Text>
        <div className={styles.cards}>
          <Card
            header={<Heading level={3}>Možná cítíte, že…</Heading>}
            text={
              <div>
              <ul className={styles.bulletList}>
                <li>už nechcete fungovat jen výkonově,</li>
                <li>potřebujete směr a ukotvení,</li>
                <li>chcete vést lidi zdravěji,</li>
                <li>hledáte hlubší smysl,</li>
                <li>chcete být víc sami sebou,</li>
                <li>toužíte po komunitě podobně naladěných lidí.</li>
              </ul>
              <Text>A možná už víte, že další know-how nestačí.</Text>
              </div>
            }
          />
          <Card
            header={<Heading level={3}>Prostor pro růst, který má skutečný dopad.</Heading>}
            text={
              <>
              <Text>Je to prostor, kde:</Text>
              <ul className={styles.bulletList}>
                <li>se zastavíte,</li>
                <li>uslyšíte sami sebe,</li>
                <li>objevíte svůj potenciál,</li>
                <li>pochopíte své vzorce,</li>
                <li>naučíte se vést přirozeněji,</li>
                <li>a začnete tvořit více v souladu se sebou.</li>
              </ul>
              </>
            }
          />
          <Card
            header={<Heading level={3}>Program propojuje:</Heading>}
            text={
              <ul className={styles.bulletList}>
                <li>leadership,</li>
                <li>sebepoznání,</li>
                <li>systemické principy,</li>
                <li>komunikaci,</li>
                <li>práci s emocemi,</li>
                <li>intuici,</li>
                <li>komunitu,</li>
                <li>a skutečný život.</li>
              </ul>
            }
          />
          <Card
            header={<Heading level={3}>Jste na dobré cestě. A možná cítíte, že můžete jít ještě dál.</Heading>}
            text={
              <>
                <Text>Daří se vám. Máte zkušenosti. Posouváte věci kolem sebe.
Zároveň ale přicházejí otázky:</Text>
              <ul className={styles.bulletList}>
                <li>Jak vést s větší lehkostí a jistotou?</li>
                <li>Jak skloubit práci, vztahy a vlastní energii?</li>
                <li>Jak tvořit něco, co má skutečný smysl? </li>
                <li>Jak neztratit sebe sama v každodenním tempu? </li>
                <li>Jak naplno využít svůj potenciál? </li>
              </ul>
              <Text>Právě pro tyto chvíle vznikl Future Leader.</Text>
              </>
            }
          />
        </div>
      </section>

      <Divider />

      <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>Pro koho je program určen</span>
        </Heading>
        <Heading level={4}>Pro mladé lídry, tvůrce, podnikatele, manažery i lidi, kteří cítí, že chtějí žít a tvořit vědoměji.</Heading>
        <div className={styles.audienceLayout}>
          <Card
            className={styles.audienceCard}
            header={<Heading level={3}>Program je pro vás, pokud:</Heading>}
            text={
              <ul className={`${styles.bulletList} ${styles.audienceList}`}>
                <li>vedete lidi nebo chcete začít vést</li>
                <li>cítíte, že už nechcete fungovat jen výkonově</li>
                <li>hledáte větší smysl a směr</li>
                <li>chcete lépe rozumět sobě i vztahům</li>
                <li>stojíte na životní křižovatce</li>
                <li>chcete aktivně měnit prostor kolem sebe</li>
                <li>toužíte tvořit autenticky</li>
                <li>chcete být součástí inspirativní sítě absolventů</li>
              </ul>
            }
            footer={
              <div className={styles.audienceMeta}>
                <span className={styles.audienceMetaLabel}>Věk účastníků</span>
                <span className={styles.audienceMetaValue}>24–39 let</span>
              </div>
            }
          />
          <aside className={styles.audienceAside}>
            <span className={styles.audienceAsideKicker}>Komu sedí nejvíc</span>
            <Text>
              Těm, kdo už nechtějí jen sbírat další nástroje, ale hledají hlubší
              oporu, větší vnitřní jasnost a zdravější způsob, jak vést sebe i druhé.
            </Text>
          </aside>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className={styles.finalCtaInner}>
          <div className={styles.finalCtaSymbol}>
            <LogoSymbol hovered={false} color="var(--color-beige)" />
          </div>
          <div className={styles.finalCtaContent}>
            <span className={styles.finalCtaKicker}>Poznej sebe a projev své jedinečné kvality</span>
            <Heading level={2} className={styles.finalCtaHeading}>Jestli cítíte, že je čas vykročit, přidejte se k dalšímu běhu Future Leader.</Heading>
            <Text className={styles.finalCtaText}>Čtyři víkendová setkání, malá skupina a prostor, kde můžete růst bez masek, v kontaktu sami se sebou i s druhými.</Text>
            <div className={styles.finalCtaActions}>
              <Button href="/nezavazna-prihlaska">Nezávazná přihláška</Button>
              <a href="/ohlasy" className={styles.finalCtaLink}>Přečíst si ohlasy</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
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
