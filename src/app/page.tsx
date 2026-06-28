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
          <a href="/nas-tym" className={`${styles.polarity} ${styles.polarityLink}`}>10 let zkušeností</a>
          <a href="#terminy-programu" className={`${styles.polarity} ${styles.polarityLink}`}>4 prodloužené víkendy</a>
          <a href="/komunita" className={`${styles.polarity} ${styles.polarityLink}`}>komunita absolventů</a>
        </div>
      </section>

      <Divider />

      <section className={styles.section}>
        <Heading level={2}>Jak to funguje</Heading>
        <div className={styles.programTeaserLayout}>
          <div>
            <Text><strong>4 prodloužené víkendy</strong> během roku v malé skupině 12–20 lidí.</Text>
            <Text>Každé setkání otevírá jiné téma — autenticitu, vztahy, systémové principy, leadership nové generace.</Text>
            <Text>Kombinace sebepoznání, prožitku a komunity — vše mimo běžný provoz života.</Text>
          </div>
          <div>
            <a href="/o-programu" className={styles.programTeaserLink}>Přečíst si více o programu →</a>
          </div>
        </div>
      </section>

      <section id="terminy-programu" className={styles.programDatesSection}>
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
