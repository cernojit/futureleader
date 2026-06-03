import type { Metadata } from "next";
import Image from "next/image";
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

function DecorSymbol() {
  return (
    <Image
      src="/logo-symbol.svg"
      alt=""
      width={40}
      height={37}
      className={styles.decorSymbol}
      aria-hidden="true"
    />
  );
}

const GALLERY_IMAGES = [
  { src: "/images/dilo-z-dilu/IMG_1024.webp", alt: "Dílo z dílů — detail" },
  { src: "/images/dilo-z-dilu/IMG_1004.webp", alt: "Dílo z dílů — pohled" },
  { src: "/images/dilo-z-dilu/IMG_1030+1.webp", alt: "Dílo z dílů — perspektiva" },
  { src: "/images/dilo-z-dilu/IMG_0990.webp", alt: "Dílo z dílů — celek" },
];

const PROCESS_IMAGES = [
  { src: "/images/dilo-z-dilu/Dilo_kovotlaceni_mosaz_kmen+(1).webp", alt: "Kovotlačení — krok 1" },
  { src: "/images/dilo-z-dilu/Dilo_kovotlaceni_mosaz_kmen+(2).webp", alt: "Kovotlačení — krok 2" },
  { src: "/images/dilo-z-dilu/Dilo_kovotlaceni_mosaz_kmen+(3).webp", alt: "Kovotlačení — krok 3" },
  { src: "/images/dilo-z-dilu/Dilo_kovotlaceni_mosaz_kmen+(4).webp", alt: "Kovotlačení — krok 4" },
  { src: "/images/dilo-z-dilu/Dilo_vyroba_stonek+(1).webp", alt: "Výroba stonku — krok 1" },
  { src: "/images/dilo-z-dilu/Dilo_vyroba_stonek+(2).webp", alt: "Výroba stonku — krok 2" },
  { src: "/images/dilo-z-dilu/Dilo_vyroba_stonek+(3).webp", alt: "Výroba stonku — krok 3" },
  { src: "/images/dilo-z-dilu/Dilo_vyroba_stonek+(4).webp", alt: "Výroba stonku — krok 4" },
];

export default function DiloZDiluPage() {
  return (
    <article>
      {/* Nadpis + dekorativní elipsy */}
      <div className={styles.titleWrapper}>
        <Image
          src="/dilo-ellipses.svg"
          alt=""
          width={919}
          height={479}
          className={styles.ellipses}
          aria-hidden="true"
        />
        <Heading level={1} className={styles.titleOverlay}>
          Dílo z dílů<br />harmonie polarit
        </Heading>
      </div>
      <Text size="lg" weight="semibold" className={styles.heroSubtitle}>
        Esence programu Future Leader zhmotněná v autorském díle designérky
        Anny Štěpánkové, absolventky programu.
      </Text>

      {/* Video */}
      <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/t5lrWqeTTw8"
            title="Dílo z dílů — Future Leader"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        </div>
      </section>

      {/* Popis + CTA */}
      <section className={styles.section}>
        <Text>
          Dílo z dílů není jen uměleckým předmětem, je to zhmotnění energie
          Future Leadera a myšlenek nové doby. Přináší zprávu o harmonii polarit,
          o hledání rovnováhy a o všem, co může vzniknout propojením rozmanitých
          energií v jeden celek. Nese s sebou příběhy, které mohou inspirovat
          každého z nás, a zároveň svou přítomností a pohybem i další příběhy
          vytváří.
        </Text>
        <div>
          <Button href="/nezavazna-prihlaska" variant="primary">
            Mám zájem
          </Button>
        </div>
      </section>

      {/* Galerie díla */}
      <section className={styles.section}>
        <div className={styles.gallery}>
          {GALLERY_IMAGES.map((img) => (
            <div key={img.src} className={styles.galleryItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Příběh díla */}
      <section className={styles.section}>
        <Heading level={2}>Příběh díla</Heading>
        <div className={styles.card}>
          <Text>
            Každý z absolventů a lektorů programu Future Leader přispěl ke vzniku
            Díla svým kouskem a svým unikátním způsobem. To, že se Dílo teď
            dostává k vám, je výsledkem stovek hodin práce a nese kousek energie
            každého z nich.
          </Text>
        </div>

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

      {/* Výroba */}
      <section className={styles.section}>
        <Heading level={2}>Proces výroby</Heading>
        <div className={styles.processGrid}>
          {PROCESS_IMAGES.map((img) => (
            <div key={img.src} className={styles.processItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className={styles.processImage}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Inspirace */}
      <section className={styles.section}>
        <Heading level={2}>Umělecká inspirace</Heading>
        <div className={styles.card}>
          <Text>
            Autorka čerpala inspiraci z kinetického umění Alexandra Caldera,
            známého svými mobily, jejichž části se dávají do pohybu prouděním
            vzduchu nebo dotykem. Přinášejí radost a energii do prostoru a nesou
            sdělení o autenticitě a správném načasování.
          </Text>
        </div>

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
        <div className={styles.card}>
          <Text>
            Každé Dílo je jedinečné a v budoucnu se může jeho podoba proměňovat
            stejně jako se proměňujeme my a svět kolem nás. Kouskem bude stále
            stejné a zároveň pokaždé jiné. Tak jako my lidé.
          </Text>
        </div>

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
      <section className={styles.statement}>
        <span className={styles.statementLine}>Dílo z dílů je o harmonii polarit a o stabilitě v pohybu.</span>
        <span className={styles.statementLine}>Dílo z dílů je o životě.</span>
        <span className={styles.statementLine}>Dílo z dílů je o nás.</span>
      </section>

      {/* Historie */}
      <section className={styles.section}>
        <div className={styles.imageWithCaption}>
          <Image
            src="/images/dilo-z-dilu/Lubo_Feher_Dilo-z-Dilu.webp"
            alt="Ľubomír Fehér přebírá první Dílo z dílů"
            width={800}
            height={500}
            className={styles.fullImage}
          />
          <Text size="sm" weight="extralight">
            Ľubomír Fehér přebírá první Dílo z dílů
          </Text>
        </div>
      </section>

      {/* O autorce */}
      <section className={styles.section}>
        <Heading level={2}>O autorce</Heading>
        <div className={styles.authorProfile}>
          <div className={styles.authorImageWrapper}>
            <Image
              src="/images/dilo-z-dilu/IMG_5253.webp"
              alt="Anna Štěpánková"
              width={400}
              height={400}
              className={styles.authorImage}
            />
          </div>
          <div className={styles.authorContent}>
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
        </div>
      </section>

      {/* Mise */}
      <section className={styles.section}>
        <Heading level={2}>Mise</Heading>
        <div className={styles.missionBox}>
          <Image
            src="/images/dilo-z-dilu/FL_1-2_komunita.webp"
            alt="Future Leader komunita"
            width={800}
            height={400}
            className={styles.missionImage}
          />
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
        <div className={styles.card}>
          <ContactInfo
            name="Ivana Sládková"
            email="info@futureleader.cz"
            phone="+420 724 030 480"
          />
        </div>
      </section>
    </article>
  );
}
