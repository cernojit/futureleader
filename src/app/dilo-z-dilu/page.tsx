import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Button } from "@/components/atoms/Button/Button";
import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dílo z dílů",
  description:
    "Esence programu Future Leader zhmotněná v autorském díle designérky Anny Štěpánkové. Umělecké dílo inspirované kinetickým uměním.",
};

export default function DiloZDiluPage() {
  return (
    <article>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} aria-hidden="true" />
        <Heading level={1} className={styles.heroSubtitle}>
          Dílo z dílů
        </Heading>
        <Text size="lg" weight="extralight" className={styles.heroSubtitle}>
          Esence programu Future Leader zhmotněná v autorském díle designérky
          Anny Štěpánkové, absolventky programu.
        </Text>
        <Text className={styles.heroText}>
          Dílo z dílů není jen uměleckým předmětem, je to zhmotnění energie
          Future Leadera a myšlenek nové doby. Přináší zprávu o harmonii polarit,
          o hledání rovnováhy a o všem, co může vzniknout propojením rozmanitých
          energií v jeden celek. Nese s sebou příběhy, které mohou inspirovat
          každého z nás, a zároveň svou přítomností a pohybem i další příběhy
          vytváří.
        </Text>
        <Button href="/nezavazna-prihlaska" variant="primary">
          Mám zájem
        </Button>
      </section>

      {/* Příběh díla */}
      <section className={styles.section}>
        <Heading level={2}>Příběh díla</Heading>
        <Text>
          Každý z absolventů a lektorů programu Future Leader přispěl ke vzniku
          Díla svým kouskem a svým unikátním způsobem. To, že se Dílo teď
          dostává k vám, je výsledkem stovek hodin práce a nese kousek energie
          každého z nich.
        </Text>

        <blockquote className={styles.quote}>
          <p>
            Trvalo rok, než vznikla finální podoba díla, Anička vše předělávala
            znova a znova, dokud jsme já a celá skupina Future Leaderů neměli
            pocit, že to je ONO.
          </p>
          <cite className={styles.quoteAuthor}>— Ivana Sládková</cite>
        </blockquote>

        <blockquote className={styles.quote}>
          <p>
            Dlouho mi trvalo najít konsenzus mezi tím, jak to vidím já a jak to
            vidí skupina.
          </p>
          <cite className={styles.quoteAuthor}>— Anička Štěpánková</cite>
        </blockquote>
      </section>

      {/* Inspirace */}
      <section className={styles.section}>
        <Heading level={2}>Umělecká inspirace</Heading>
        <Text>
          Autorka čerpala inspiraci z kinetického umění Alexandra Caldera,
          známého svými mobily, jejichž části se dávají do pohybu prouděním
          vzduchu nebo dotykem. Přinášejí radost a energii do prostoru a nesou
          sdělení o autenticitě a správném načasování.
        </Text>

        <Heading level={3}>Harmonie polarit</Heading>
        <div className={styles.polarities}>
          <div className={styles.polarity}>Lehkost pohybu a ukotvená stabilita</div>
          <div className={styles.polarity}>Dokonalost a syrovost</div>
          <div className={styles.polarity}>Jemnost a síla</div>
          <div className={styles.polarity}>Tok a ukotvení</div>
          <div className={styles.polarity}>Země a vzduch</div>
          <div className={styles.polarity}>Náhoda a přesnost</div>
        </div>

        <Text>
          Dílo z dílů zosobňuje promyšlenou jednoduchost.
        </Text>
      </section>

      {/* Jedinečnost */}
      <section className={styles.section}>
        <Heading level={2}>Každé dílo je jedinečné</Heading>
        <Text>
          Každé Dílo je jedinečné a v budoucnu se může jeho podoba proměňovat
          stejně jako se proměňujeme my a svět kolem nás. Kouskem bude stále
          stejné a zároveň pokaždé jiné. Tak jako my lidé.
        </Text>

        <blockquote className={styles.quote}>
          <p>
            Líbilo by se nám, kdyby každý kámen měl také svůj příběh, třeba
            propojený s tím, kdo Dílo vlastní.
          </p>
          <cite className={styles.quoteAuthor}>— Anička Štěpánková</cite>
        </blockquote>

        <blockquote className={styles.quote}>
          <p>
            Dílo je jako každý Future Leader — stojí nohama pevně na zemi, ale
            může si vylítnout a může se roztočit a roztančit.
          </p>
          <cite className={styles.quoteAuthor}>— Anička Štěpánková</cite>
        </blockquote>
      </section>

      {/* Statement */}
      <div className={styles.statement}>
        <Text size="lg" weight="semibold">
          <span className={styles.statementLine}>Dílo z dílů je o harmonii polarit a o stabilitě v pohybu.</span>
          <span className={styles.statementLine}>Dílo z dílů je o životě.</span>
          <span className={styles.statementLine}>Dílo z dílů je o nás.</span>
        </Text>
      </div>

      {/* O autorce */}
      <section className={styles.section}>
        <Heading level={2}>O autorce</Heading>
        <div className={styles.authorProfile}>
          <Text>
            Anna Štěpánková pracuje na pomezí snového umění a funkčního
            produktového designu. Zmíněná v Forbes. Vytvářela výlohy pro Hermès,
            instalace pro Czech Grand Design a pražské dekorace ESKU.
          </Text>
          <Text>
            Pragmaticky ukotvená a zároveň volně plynoucí. Vzdušná i zemitá.
            Hloubavě přemýšlivá. Ryzí a zásadová. Zarputilá a energická — a
            přitom tak jemná a křehká.
          </Text>
          <div className={styles.authorTraits}>
            <span className={styles.trait}>Neklidný oceán i jemná vlna</span>
            <span className={styles.trait}>Okouzlující a půvabná</span>
            <span className={styles.trait}>Nenápadně výrazná</span>
            <span className={styles.trait}>Měkce strohá</span>
            <span className={styles.trait}>Elegantně přesná</span>
            <span className={styles.trait}>Dokonale nedokonalá</span>
            <span className={styles.trait}>Autenticky svá</span>
          </div>
        </div>
      </section>

      {/* Mise */}
      <section className={styles.section}>
        <Heading level={2}>Mise</Heading>
        <div className={styles.missionBox}>
          <Text>
            Fungujeme na principu energie za energii a našich partnerů si
            nesmírně vážíme. Dílo v sobě nese velkou hodnotu a zároveň pomáhá
            financovat program Future Leader, díky kterému organizace může růst
            a dává programu život.
          </Text>
          <Text>
            Prostředky podporují rozvoj programu, umožňují talentovaným mladým
            lidem projít proměnou a rozvíjet své jedinečné dary. Absolventi
            působí jako zahradníci, kteří zasévají semínka ve svých oblastech
            vlivu.
          </Text>
          <Text>
            Dílo je poděkováním podporovatelům, kteří přispěli svou finanční
            energií. Podporovatelé získávají kousek energie Future Leaderů
            zhmotněnou v tomto jedinečném uměleckém předmětu.
          </Text>
          <Text size="sm">
            Součástí díla je tištěný průvodce Harmonie polarit — autorský
            průvodce s příběhy Future Leaderů.
          </Text>
        </div>
      </section>

      {/* Kontakt */}
      <section className={styles.section}>
        <Heading level={2}>Kontakt</Heading>
        <ContactInfo
          name="Ivana Sládková"
          email="info@futureleader.cz"
          phone="+420 724 030 480"
        />
      </section>
    </article>
  );
}
