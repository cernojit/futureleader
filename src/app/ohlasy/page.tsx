import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { TestimonialGrid } from "@/components/organisms/TestimonialGrid/TestimonialGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ohlasy",
  description:
    "Ohlasy absolventů programu Future Leader — zkušenosti z desátého běhu i předchozích ročníků.",
};

const TESTIMONIALS = [
  {
    name: "Nicole Martincová",
    role: "Team Manager, Učitel naživo",
    quote:
      "Jeden z nejbezpečnějších a nejinspirativnějších kolektivů, jehož jsem byla součástí. Dopad byl cítit od prvního dne.",
  },
  {
    name: "Martin Bak",
    role: "Group Leader, Heureka Group",
    quote:
      "Zbavil jsem se nepomáhajících ideálů a naučil se novým perspektivám na sebe sama díky různým nástrojům a technikám.",
  },
  {
    name: "Zuzana Kuberová",
    role: "Výkonná ředitelka, Reuse Federation",
    quote:
      "Program se zaměřuje na sebeobjevování, ne na sebezdokonalování. Prozkoumali jsme hluboká systémová témata.",
  },
  {
    name: "Jiří Tatíček",
    role: "Nákupčí, RACOM",
    quote:
      "Zážitek je nepopsatelný. Bezpečný prostor a soudržná skupinová dynamika mě zcela pohltily.",
  },
  {
    name: "Lucie Deptová",
    role: "Producentka / Analytička",
    quote:
      "Celoroční cesta se zážitkovými aktivitami včetně pohybové meditace, tance a konstelační práce.",
  },
  {
    name: "Magdalena Hubená",
    role: "Projektová manažerka",
    quote:
      "Z každého víkendu jsem si odnesla konkrétní vhledy a ocenila podporující komunitu.",
  },
];

export default function OhlasyPage() {
  return (
    <>
      <Heading level={1}>Ohlasy</Heading>
      <Text size="lg" weight="extralight" className={styles.intro}>
        Co říkají absolventi 10. běhu programu Future Leader.
      </Text>
      <TestimonialGrid testimonials={TESTIMONIALS} />

      <section className={styles.history}>
        <Heading level={2}>Historie programu</Heading>
        <Text>
          Program Future Leader byl založen v roce 2012 třemi ženami — Tamarou
          Kováčovou, Silvií Pýchovou a Ivanou Sládkovou — ve spolupráci se
          Zdeňkem Štěpánkem. Byl navržen pro rozvoj navigačních dovedností
          lídrů a budování meziodvětvových sítí.
        </Text>
      </section>
    </>
  );
}
