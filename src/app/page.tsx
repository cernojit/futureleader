import { Heading } from "@/components/atoms/Heading/Heading";
import styles from "./page.module.css";
import { Button } from "@/components/atoms/Button/Button";
import { Divider } from "@/components/atoms/Divider/Divider";
import { Text } from "@/components/atoms/Text/Text";
import { LogoSymbol } from "@/components/atoms/Logo/LogoSymbol";
import { Card } from "@/components/atoms/Card/Card";
import { HeartbeatSignupLogo } from "@/components/molecules/HeartbeatSignupLogo/HeartbeatSignupLogo";

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

const PHILOSOPHY_VALUES = [
  "znají sami sebe",
  "umí převzít zodpovědnost",
  "dokážou spolupracovat",
  "a tvoří ze svého středu",
] as const;


export default function HomePage() {
  return (
    <>
      <div className={styles.stickySignupCta}>
        <HeartbeatSignupLogo className={styles.stickySignupLogo} />
      </div>

      <section className={styles.sectionHeroImage}>
        <div className={styles.sectionHeroImageInner}>
          <Heading level={1} className={styles.heroImageText}>Leadership nové generace začíná uvnitř</Heading>
          <Heading level={2} className={styles.heroImageText}>Prostor pro autentické lídry</Heading>
         
          <div className={styles.cta}>
            <Button href="/nezavazna-prihlaska">Nezávazná přihláška</Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <Heading level={2}>Transformační program pro ty, kteří chtějí vést autenticky — sebe, vztahy, práci i život.</Heading>
        <Heading level={3}>10 let zkušeností • 4 víkendová setkání • komunita absolventů</Heading>
        <div className={styles.polarities}>
          <div className={styles.polarity}>10 let zkušeností</div>
          <div className={styles.polarity}>4 prodloužené víkendy</div>
          <div className={styles.polarity}>komunita absolventů</div>
        </div>
      </section>

      <Divider />

       <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>Filozofie programu</span>
        </Heading>
        <div className={styles.philosophyLayout}>
          <Card
            className={styles.philosophyLeadCard}
            header={<Heading level={3}>Nevěříme na dokonalé lídry.</Heading>}
            text={
              <>
                <Text>Věříme v lidi, kteří:</Text>
                <ul className={`${styles.bulletList} ${styles.philosophyList}`}>
                  {PHILOSOPHY_VALUES.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
                <Text>
                  Nevedeme účastníky k výkonu za každou cenu. Vedeme je k větší
                  pravdivosti, odvaze a schopnosti být v kontaktu sami se sebou i s druhými.
                </Text>
                <Text>
                  Protože právě odtud vzniká leadership, který má skutečný dopad.
                </Text>
              </>
            }
          />
          <aside className={styles.philosophyQuote}>
            <span className={styles.philosophyKicker}>Věříme, že…</span>
            <Heading level={3}>člověk nemusí být opraven, aby mohl zářit.</Heading>
            <Text>
              Vedeme účastníky k přijetí sebe sama ve všech svých barvách,
              emocích i nedokonalostech.
            </Text>
            <Text>
              Protože právě odtud vzniká autentické vedení, zdravé vztahy a
              smysluplné tvoření.
            </Text>
          </aside>
        </div>

      </section>

      <Divider />

      <section className={styles.section}>
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>PROČ FUTURE LEADER</span>
        </Heading>
        <Heading level={3}>Nestačí umět vést tým. Dnešní svět potřebuje lidi, kteří umí vést sami sebe.</Heading>
        <Text>Future Leader je transformační rozvojový program pro mladé lídry, podnikatele, manažery, tvůrce a všechny, kteří chtějí žít i tvořit autenticky, vědomě a v souladu se svými hodnotami.</Text>
        <div className={styles.cards}>
          <Card
            header={<Heading level={3}>Možná cítíte, že…</Heading>}
            text={
              <div>
              <ul className={styles.bulletList}>
                <li>už nechcete fungovat jen výkonově,</li>
                <li>potřebujete větší směr a ukotvení,</li>
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
            header={<Heading level={3}>Future Leader není klasický leadership kurz.</Heading>}
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
                <li>toužíte tvořit autenticky</li>
                <li>chcete být součástí inspirativní komunity</li>
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
                <Text>V malé skupině 12–20 lidí.</Text>
                <Text>
                  Každé z nich otevírá jiné téma leadershipu, vztahu k sobě i k druhým.
                </Text>
              </>
            }
            footer={
              <div className={styles.programMetaRow}>
                <div className={styles.programMetaCard}>
                  <span className={styles.programMetaLabel}>Formát</span>
                  <span className={styles.programMetaValue}>Čtvrtek — neděle</span>
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

      <Divider />

      <section className={styles.topicMosaicSection}>
        <div className={styles.topicMosaicInner}>
          <Heading level={2} className={styles.headingWithLogo}>
            <LogoSymbol hovered={false} color="currentColor" />
            <span>Témata programu</span>
          </Heading>
          <div className={styles.topicMosaic}>
            <div className={styles.mosaicWords}>
              {PROGRAM_TOPICS.map((topic, index) => {
                const wordSizeClass = `mosaicWord${index % 4}`;

                return (
                  <span key={topic} className={`${styles.mosaicWord} ${styles[wordSizeClass]}`}>
                    {topic}
                  </span>
                );
              })}
            </div>
            <div className={`${styles.mosaicTile} ${styles.mosaicTopLeft} ${styles.mosaicCoral}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicTopMid} ${styles.mosaicBeige}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicTopRight} ${styles.mosaicYellow}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicLeftMid} ${styles.mosaicGrey}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicRightMid} ${styles.mosaicPink}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicBottomLeft} ${styles.mosaicYellow}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicBottomMid} ${styles.mosaicCoral}`} />
            <div className={`${styles.mosaicTile} ${styles.mosaicBottomRight} ${styles.mosaicBeige}`} />
          </div>
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
    </>
  );
}
