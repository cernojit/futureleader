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

const PROGRAM_DATES_CURRENT_RUN = [
  "Pátek – neděle: 27. – 29. 11. 2026 – Ekofarma Bílý Mrak",
  "Čtvrtek – neděle: 4. – 7. 2. 2027 – Statek Odysea",
  "Čtvrtek – neděle: 1. – 4. 4. 2027 – Statek Odysea",
  "Čtvrtek – neděle: 17. – 20. 6. 2027 – Statek Odysea",
] as const;

const PROGRAM_DATES_12TH_RUN = [
  "Pátek – neděle: 16. – 18. 4. 2027",
  "Čtvrtek – neděle: 11. – 14. 6. 2027",
  "Čtvrtek – neděle: 9. – 12. 9. 2027",
  "Čtvrtek – neděle: 18. – 21. 11. 2027",
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
        <Heading level={2} className={styles.headingWithLogo}>
          <LogoSymbol hovered={false} color="currentColor" />
          <span>Filozofie programu</span>
        </Heading>
        <div className={styles.philosophyLayout}>
          <Card
            className={styles.philosophyLeadCard}
            header={<Heading level={3}>Autentický leadership začíná u vás.</Heading>}
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
        <Heading level={2}>Transformační program pro ty, kteří chtějí vést autenticky — sebe, vztahy, práci i život.</Heading>
        {/* <Heading level={3}>10 let zkušeností • 4 víkendová setkání • komunita absolventů</Heading> */}
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

      <section className={styles.programDatesSection}>
        <div className={styles.programDatesInner}>
          <Heading level={3} className={styles.programDatesHeading}>Termíny programu</Heading>
          <div className={styles.programDatesGrid}>
            <div className={styles.programDatesCard}>
              <span className={styles.programDatesLabel}>Termíny: Future Leader 11. běh</span>
              <ul className={styles.programDatesList}>
                {PROGRAM_DATES_CURRENT_RUN.map((date) => (
                  <li key={date}>{date}</li>
                ))}
              </ul>
            </div>
            <div className={styles.programDatesCard}>
              <span className={styles.programDatesLabel}>Termíny: Future Leader 12. běh</span>
              <ul className={styles.programDatesList}>
                {PROGRAM_DATES_12TH_RUN.map((date) => (
                  <li key={date}>{date}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.programLocationsSection}>
        <div className={styles.programInfoInner}>
          <Heading level={3}>Místo konání</Heading>
          <div className={styles.programLocationsGrid}>
            <article className={styles.programInfoCard}>
              <Heading level={4}>Statek Odysea</Heading>
              <Text>
                Statek Odysea, Nuzířov 10, Malhostovice, 666 03
              </Text>
              <a
                className={styles.programInfoLink}
                href="https://www.google.com/maps/place/Nuz%C3%AD%C5%99ov+10,+666+03+Malhostovice-Ti%C5%A1nov+3/@49.3436681,16.5177606,17z/data=!3m1!4b1!4m6!3m5!1s0x4712855e09330499:0xa0bcc194d925ab76!8m2!3d49.3436646!4d16.5203355!16s%2Fg%2F11crx58syg?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
              >
                Zobrazit na mapě
              </a>
              <a className={styles.programInfoLink} href="http://www.statekodysea.cz/">
                www.statekodysea.cz
              </a>
            </article>

            <article className={styles.programInfoCard}>
              <Heading level={4}>Ekofarma Bílý Mrak</Heading>
              <Text>Šachov 13, 517 21 Týniště nad Orlicí</Text>
              <a className={styles.programInfoLink} href="https://www.bilymrak.cz/">
                www.bilymrak.cz
              </a>
            </article>
          </div>

          <Text className={styles.programLocationNote}>Změna místa vyhrazena.</Text>
        </div>
      </section>

      <section className={styles.programPricingSection}>
        <div className={styles.programInfoInner}>
          <Heading level={2}>Investice do programu</Heading>
          <div className={styles.pricingLayout}>
            <article className={`${styles.programInfoCard} ${styles.programPricingCard}`}>
                <Text>
                  <strong>8 000 Kč za modul</strong> (čtvrtek/pátek–neděle).
                </Text>
                <Text>
                  <strong>Nejste si jistí?</strong> Přihlaste se na první modul a pak se
                  rozhodněte, zda budete pokračovat.
                </Text>
                <Text>
                  <strong>2 000 Kč za noc</strong> za ubytování a stravu.
                </Text>
                <Text>
                  Bez ubytování činí servisní poplatek 2 000 Kč za modul.
                </Text>
                <Text>
                  Pokud vám v účasti brání finance, ozvěte se nám.
                </Text>

                <div className={styles.programInfoActions}>
                  <Button href="/nezavazna-prihlaska">Mám zájem</Button>
                  <Button href="/o-programu" variant="secondary">Chci vědět víc</Button>
                </div>
            </article>
            <aside className={styles.pricingNote}>
              <span className={styles.pricingNoteKicker}>Věříme na přístupnost</span>
              <Heading level={3}>Cena není překážkou.</Heading>
              <Text>
                Pokud vám v účasti brání finanční situace, ozvěte se nám. 
                Hledáme řešení pro ty, kteří opravdu chtějí být součástí komunity.
              </Text>
            </aside>
          </div>
        </div>
      </section>

      {/* <Divider />

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
      </section> */}

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
