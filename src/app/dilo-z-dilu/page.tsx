import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dílo z dílů",
  description:
    "Umělecké dílo inspirované kinetickým uměním Alexandra Caldera — manifestace energie Future Leader.",
};

export default function DiloZDiluPage() {
  return (
    <article>
      <Heading level={1}>Dílo z dílů</Heading>

      <section className={styles.section}>
        <Heading level={2}>Umělecké dílo</Heading>
        <Text>
          Dílo z dílů je manifestací energie Future Leader a myšlenek nové éry.
          Představuje harmonii polarit, hledání rovnováhy a sílu různorodých
          energií sjednocených v jednom celku.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Koncept</Heading>
        <Text>
          Dílo čerpá inspiraci z kinetického umění — mobilů Alexandra Caldera.
          Umělecká díla, jejichž jednotlivé části se pohybují prouděním vzduchu
          nebo dotykem a přinášejí radost a energii do prostoru.
        </Text>
        <Text>
          Rovnováha pohybu s uzemněním. Dokonalost vedle syrovosti. Jemnost
          vyvážená silou. Tok v protikladu s ukotvením. Země a vzduch. Náhoda
          potkávající přesnost.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Příběh</Heading>
        <Text>
          Absolventi i lektoři programu přispěli svými díly. Vývoj trval
          přibližně rok, s opakovaným zdokonalováním, dokud skupina nepocítila,
          že finální podoba je autentická. Každé dílo je unikátní a bude se
          vyvíjet v čase — zrcadlí lidskou proměnu a proměnu světa.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>O autorce</Heading>
        <Text>
          Anna Štěpánková pracuje na pomezí snového umění a funkčního
          produktového designu. Mezi její práce patří výlohy pro Hermès,
          pražské instalace ESKU a scenografie pro Czech Grand Design.
        </Text>
      </section>

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
