import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Card } from "@/components/atoms/Card/Card";
import { LogoSymbol } from "@/components/atoms/Logo/LogoSymbol";
import styles from "./page.module.css";
import { Divider } from "@/components/atoms/Divider/Divider";

type TeamMember = {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly links?: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
  }>;
};

const LECTORS: ReadonlyArray<TeamMember> = [
  {
    name: "Světla Holasová",
    role: "lektorka, mentorka v manažerských dovednostech, sebe-rozvoji, projektovém managementu a time managementu",
    bio:
      "Dovolit si být sám sebou je ten největší dar, který můžeme dát sobě i světu. Jako lektorka vás doprovázím na cestě k celistvosti - nehledáme chyby, které je třeba odstranit, ale prostor pro znovu-nalezení všech částí vaší osobnosti, ze kterých můžete tvořit. Podpořím vás k získání zdravého sebe-vědomí a objevení vaší unikátní cesty. Smyslem mé práce je vidět vás znovu zářit a tvořit život v souladu s vaší přirozeností. Hlavní lektorkou programu Future Leader jsem od 10. ročníku.",
    imageSrc: "/images/nas-tym/svetla.webp",
    imageAlt: "Světla Holasová",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/svetlaholasova" },
      { label: "Rostu.eu", href: "https://www.rostu.eu" },
    ],
  },
  {
    name: "Alena Jáchimová",
    role: "průvodkyně spirálovou dynamikou",
    bio:
      "Koučka a lektorka, která věří, že sebepoznání je klíčem k lepšímu životu i práci. S její zkušeností z vedení týmů, firemní kultury a koučování se můžete těšit na interaktivní, hravou a objevnou cestu, která vás provede poznáváním vlastních hodnot a potenciálu.",
    imageSrc: "/images/nas-tym/Alena_Jachimova.webp",
    imageAlt: "Alena Jáchimová",
    links: [
      { label: "Osobní web", href: "http://alenajachimova.cz/" },
      { label: "Power Coaching", href: "https://www.powercoaching.cz/" },
    ],
  },
];

const PROGRAM_TEAM: ReadonlyArray<TeamMember> = [
  {
    name: "Klára Čebišová (Valentová)",
    role: "vedoucí a průvodkyně",
    bio:
      "Klára je absolventkou Future Leadera, přišla ze světa obchodu a rodinné firmy. Dnes je milující maminkou. Fandí všem, kteří na sobě chtějí pracovat a posouvat se. Sama ví, že je to výborný způsob, jak více rozzářit svůj život a v důsledku nejen ten. Má ráda dynamiku, společnost, umí si však chránit svůj klid a energii. Věří na víly, na přesahy a na vyslaná přání. Nejlépe se cítí v radosti, lásce a plynutí.",
    imageSrc: "/images/nas-tym/Kl%C3%A1ra.webp",
    imageAlt: "Klára Čebišová (Valentová)",
  },
  {
    name: "Jarka Ježková",
    role: "koordinátorka",
    bio:
      "Jarka je absolventkou programu Future Leader, který jí změnil život. Orientuje se v oblastech projektů, logistiky a obchodu. Propojuje různé aktivity s citlivostí, intuicí a vnímáním hlubších souvislostí. Je pro ni důležité věnovat se smysluplným a ekologicky udržitelným aktivitám. Má blízko k přírodě, meditacím a starým cestám moudrosti (zejména šamanismu), které ji učí naslouchat, když chce zrovna porozumět. Podporuje ty, kteří chtějí růst, naslouchat sobě a žít vědoměji.",
    imageSrc: "/images/nas-tym/Jarka_Jezkova.webp",
    imageAlt: "Jarka Ježková",
  },
];

const FOUNDER: ReadonlyArray<TeamMember> = [
  {
    name: "Ivana Sládková",
    role: "zakladatelka a průvodkyně",
    bio:
      "Pozitivní osobnost, která se věnuje rozvoji potenciálu jednotlivců, týmů i regionů. Zajímá ji tvorba učících se sítí na principu sdílení, kdy se účastníci sami zapojují, vzájemně se překvapují, inspirují a společně tvoří. Ráda zkoumá možnosti, jak žít přirozeně v rovnováze, jak si být vzájemně zdrojem lásky, inspirace, hloubky, čistoty, něžnosti i krásy.",
    imageSrc: "/images/nas-tym/Ivanka.webp",
    imageAlt: "Ivana Sládková",
  },
];

const COFOUNDERS: ReadonlyArray<TeamMember> = [
  {
    name: "Tamara Kováčová",
    role: "spoluzakladatelka",
    bio:
      "Tamara je kreativní, proaktivní inovátorka, věnuje se neziskovým projektům ve vzdělávání. Pracuje pro EDUin, externě vyučuje na Ústavu jazyků a komunikace neslyšících na FF UK a je předsedkyní Expertní komise pro otázky vzdělávání při střechové organizaci sdružující organizace neslyšících (ASNEP). Když něco není a je to třeba, tak se stará, aby se to zkusilo, vzniklo a bylo.",
    imageSrc: "/images/nas-tym/Tamara.webp",
    imageAlt: "Tamara Kováčová",
  },
  {
    name: "Silvie Pýchová",
    role: "spoluzakladatelka",
    bio:
      "Konzultantka, metodička a manažerka se specializací na vzdělávací projekty, mapování kompetencí, projektový management a kariérové poradenství. Je aktivní v neziskové sféře v oblasti vzdělávání: výkonná ředitelka Stálé konference asociací ve vzdělávání, předsedkyně občanského sdružení Centrum kompetencí a do června 2016 předsedkyně správní rady společnosti EDUin.",
    imageSrc: "/images/nas-tym/silva.webp",
    imageAlt: "Silvie Pýchová",
  },
];

const FOUNDERS_AND_COFOUNDERS: ReadonlyArray<TeamMember> = [
  ...FOUNDER,
  ...COFOUNDERS,
];

export const metadata: Metadata = {
  title: "Náš tým",
  description:
    "Seznamte se s lektory a týmem programu Future Leader.",
};

function TeamGrid({ members }: { readonly members: ReadonlyArray<TeamMember> }) {
  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <Card
          key={member.name}
          className={styles.memberCard}
          header={<Heading level={3}>{member.name}</Heading>}
          picture={
            <Image
              src={member.imageSrc}
              alt={member.imageAlt}
              width={1200}
              height={800}
              className={styles.memberImage}
            />
          }
          text={
            <div className={styles.memberContent}>
              <p className={styles.memberRole}>{member.role}</p>
              <Text>{member.bio}</Text>
            </div>
          }
          footer={
            member.links && member.links.length > 0 ? (
              <div className={styles.links}>
                {member.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : undefined
          }
        />
      ))}
    </div>
  );
}

export default function NasTymPage() {
  return (
    <>
      <Heading level={1}>Náš tým</Heading>

      <section className={styles.section}>
        <Heading level={2}>Lektoři</Heading>
        <TeamGrid members={LECTORS} />
      </section>

      <section className={styles.section}>
        <Heading level={2}>Tým programu</Heading>
        <TeamGrid members={PROGRAM_TEAM} />
      </section>

      <Divider />

      <section className={styles.section}>
        <div className={styles.foundersGrid}>
          {FOUNDERS_AND_COFOUNDERS.map((member, index) => {
            let tileVariantClass = styles.tileCoral;
            if (index === 0) {
              tileVariantClass = styles.tilePrimary;
            } else if (index === 1) {
              tileVariantClass = styles.tileBeige;
            }

            return (
            <article
              key={member.name}
              className={`${styles.colorBox} ${styles.founderTile} ${tileVariantClass}`}
            >
              <div className={styles.tileSymbol}>
                <LogoSymbol hovered={false} color="currentColor" />
              </div>
              <span className={styles.roleBadge}>{member.role}</span>
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                width={1200}
                height={800}
                className={styles.tileImage}
              />
              <div className={styles.memberContent}>
                <Heading level={3}>{member.name}</Heading>
                <Text>{member.bio}</Text>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
