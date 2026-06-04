import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Button } from "@/components/atoms/Button/Button";
import { TestimonialCard } from "@/components/molecules/TestimonialCard/TestimonialCard";
import { TestimonialGrid } from "@/components/organisms/TestimonialGrid/TestimonialGrid";
import { Divider } from "@/components/atoms/Divider/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ohlasy",
  description:
    "Ohlasy absolventů programu Future Leader — zkušenosti z desátého běhu i předchozích ročníků.",
};

const TESTIMONIALS_10 = [
  {
    name: "Nicole Martincová",
    role: "manažerka týmu public affairs v Učitel naživo, z.ú.",
    quote:
      "Čtyři prodloužené víkendy během čtyř ročních období. Jeden z nejvíce bezpečných a inspirativních kolektivů, do kterých jsem kdy patřila. Můj highlight letošního roku — seberozvojový program Future leader, který sice trval 9 měsíců, ale dopad měl de facto po prvním dni a zároveň se mnou bude ještě hodně dlouho rezonovat. Navíc věřím, že naším posledním setkáním cesta neskončila, ale naopak začala... teď už v širší komunitě absolventů a absolventek.",
  },
  {
    name: "Martin Bak",
    role: "vedoucí skupiny v Heureka Group a.s.",
    quote:
      "S odstupem několika měsíců od formálního skončení programu můžu zhodnotit, že jsem se úspěšně zbavil několika neužitečných ideálů, naučil se nahlížet na sebe z jiných perspektiv a začal se učit prožívat život v oblastech, kterým jsem do té doby nedával takový prostor. Nastartoval jsem v sobě změny, z nichž některé budou běžet ještě dlouhou dobu, některé více na popředí, některé naopak na pozadí.\nDo programu jsem se přihlásil hlavně ze zvědavosti a abych si potvrdil, jak to vlastně mám. A díky možnosti vyzkoušet si nepřeberné množství nástrojů, technik a přístupů, jsem přišel na to, že to mám asi trochu jinak, než jsem si myslel. A že je stále mnoho dveří, za které je dobré se podívat. Díky Světle, která nás programem provedla, a celé Akádě za tuhle příležitost.",
  },
  {
    name: "Zuzana Kuberová",
    role: "výkonná ředitelka Reuse federace, z.s.",
    quote:
      "Future leader je programem, který jsem si zvolila, abych našla cestu zpět k sobě — ne, abych se vylepšila, byla nová, dokonalejší a lepší manažerka, ale abych našla vnitřní sílu, která mi jasně říká, kde jsou moje silné stránky a stavěla na nich. Co bylo důležité?\n1. Zastavit se. To bylo jasné hned po prvním víkendu, že ve spěchu se změna neuděje...že naslouchat si znamená na chvíli zastavit. Přinejmenším na čtyři prodloužené víkendy.\n2. Naladit se. Skupina, která se sešla byla různorodá, v mnohém oči otevírající a mít možnost naslouchat inspirativním lidem považuji za největší benefit programu.\n3. Otevřít se. Témata, která jsme během 4 víkendů otevírali, byla hluboká, systémová, o světě a svém já. Ne všechno odpovídá na mé otázky, ale ve všem je trochu pravdy, kterou můžu zkoumat.\n4. Nechat plynout. Ano, změna se neodehraje ráz naráz, Future leader nenabízí pět kroků ke štěstí, ale je o otevírání dveří, o setkání se skvělými lidmi a možnost jít svou cestou a svým tempem dál...",
  },
  {
    name: "Jiří Tatíček",
    role: "nákupčí v RACOM s.r.o.",
    quote:
      "Již delší dobu jsem na sobě pozoroval, že všechno řeším hlavou a rozumem. Přihlásil jsem se tedy s cílem s tím něco udělat a začít naslouchat vnitřnímu hlasu. Výsledek se dostavil hned při prvním cvičení. Rozumem jsem vůbec nechápal, co mám dělat, jaký má být výsledek, ani jak to má celé fungovat... Pak se ale ozval vnitřní hlas a i když to hlava nechápala (a stále nechápe), fungovalo to. Co se v tomto, ale i ve všech dalších cvičeních událo je slovy nepopsatelné. Kurz FL tak pro mě vystihuje právě toto slovo — nepopsatelný. Je to zkušenost, kterou si musíte zažít na vlastní kůži, abyste těmto slovům porozuměli.\nPřipadá Vám to hodně \\\"ezo\\\"? To mně před rokem taky....\nRealita ale je, že by se nic z toho nemohlo stát, nebýt bezpečného prostoru na kurzu a lidem, kteří během prvních hodin dovedli spojit různorodou skupinu do inspirujícího kolektivu.",
  },
  {
    name: "Lucie Deptová",
    role: "produkťačka, analytička, ikigai koučka",
    quote:
      "Program mi přinesl do života skvělou partu lidí, se kterou se i po skončení dál podporujeme a vídáme.\nDal mi prostor pobýt s důležitými tématy — např. jak mě v životě ovlivňuje očekávání druhých, kde jsem na sebe moc tlačila a umlčela hlas a přání svojí duše?\nDal mi vítr do plachet, větší víru ve svoje schopnosti. Dal mi dobrou kostru a oporu během roku, kdy se mi v životě spoustu věcí zásadně změnilo.\nCením si toho, že nešlo jen o aktivity verbální, ale dost jich bylo pohybově prožitkových (pohybová meditace, tanec, konstelace).\nVelkou sílu vidím v tom, že nejde jen o jeden víkendový workshop, ale o cestu celým rokem, kdy jeden víkend navazuje na druhý a člověk má prostor zapracovat i to, co se děje v mezičase.",
  },
  {
    name: "Magdalena Hubená",
    role: "projektová manažerka",
    quote:
      "Future leader mi dal krásně strávený čas, uvědomění a poznání do hloubky různých elementů mého života, na kterých se dá stavět. Z každého víkendu jsem si odnesla minimálně dvě silné myšlenky, které jsem si v průběhu vytvořila a které jsem dál prakticky uplatnila. Kromě toho mi dal taky super partu lidí, spoustu legrace a vědomí, že v tom nejsem sama.",
  },
];

const TESTIMONIALS_9 = [
  {
    name: "Michal Miguel Kubík",
    role: "podnikatel, celostní arborista",
    quote:
      "Jak popsat roční cestu, ze které jsem vyšel jako o několik levelů vyšší verze sebe sama?\nTahle otázka mi leží v hlavě už několik týdnů. Začátkem prosince jsem totiž absolvoval čtvrté, finální setkání v rámci programu Future leader. Celá roční cesta byla natolik silná, že bych tu zkušenost rád předal do prostoru s tím, že třeba někoho taky zavolá. Jenže jak popsat tuhle nálož sebeuvědomění, rozložení, znovu-poskládání a postavení se do svojí síly v tomhle krátkém formátu? Zkusím to tedy formou velice subjektivní — jiná vlastně ani není možná.\nVolání Future leader programu jsem cítil od prvního momentu, kdy jsem se o existenci tohoto programu dozvěděl. Z informací na webu jsem popravdě o moc moudřejší nebyl, vlastně jsem se nedozvěděl nic konkrétního, ale ten pocit, že to bude něco přesně pro mě, byl silný. Odvahu (k)vést jsem měl, a to mi přišlo jako rozhodující — po telefonátu s jednou absolventkou mi bylo jasné, že do toho jdu, ať to bude jakékoliv.\nInstinktivní dojem, že tenhle program vůbec nebude o tradičních leadership poučkách, se potvrdil hned při prvním setkání. Setkání se skupinou 15 lidí, se kterými jsem se nikdy neviděl a hned po úvodních pár hodinách programu pocit, že se s touhle partou znám už celé věky. Tenhle pocit se po 4 prodloužených víkendech posílil natolik, že mohu bez pochyby prohlásit, že jsme rodina, kmen.\nJaké jsou ingredience ke vzniku takového pocitu?\nPro mě je to absolutně bezpečné prostředí, ve kterém si každý může sáhnout do hlubin své duše, potkat se se svými stíny, strachy a zraněními a skamarádit se s nimi, načerpat z nich sílu, udělat z nich své mocné zdroje.\nJe to odvaha každého účastníka stát se tou nejlepší verzí sebe sama — prozkoumat svá nejtajnější zákoutí s vědomím, že všichni okolo dělají to samé.\nPotkat se s důležitými archetypy, prožít je, uvědomit si, že jsou mi stále k dispozici.\nDotknout se světa Srdce i Ega, Mysli, systémů. Nořit se do konstelací, meditací, tance, ticha. Prožít uvolňující pláč, extatický smích.\nHlavně to všechno PROŽÍT. Beze studu, bez obalu, naplno v Teď a Tady.\nA na konci celého cyklu vědět, že jsem se seznámil se svou pravou Silou, s tím, kdo jsem JÁ.\nŽe vést je potřeba v první řadě sám sebe. Vést ostatní pak půjde tak nějak samo.\nCítím obrovskou vděčnost, že jsem si tuhle cestu dovolil — vím totiž, že jsem si to zasloužil.",
  },
];

const TESTIMONIALS_1_2 = [
  {
    name: "Vítek Ježek",
    role: "zakladatel Rekola",
    quote:
      "Můj kamarád, se kterým podnikám, jel na první ročník. Bylo zajímavé vidět, jakým způsobem ho to vždycky změnilo. Začalo mě to zajímat a doufal jsem, že se toho budu moci také zúčastnit.",
  },
  {
    name: "Martin Zahradník",
    role: "vedoucí IT oddělení v příspěvkové organizaci",
    quote:
      "Kurz hodnotím jako velmi dobrou investici. Ať už časovou, finanční nebo energetickou. Byl jsem na hodně školeních, ale tenhle kurz je fakt výjimečný. Cítím hmatatelné změny v životě, které s tímhle kurzem souvisí.",
  },
  {
    name: "Jan Valeška",
    role: "sociální ekolog, fundraiser neziskovek",
    quote:
      "Dalo mi to neuvěřitelný nový obzor. Ty prožitky, když si tím projdeš, to mi hodně dalo. I když dělám ve vzdělávání dospělých, nikdy jsem na sobě tu prožitkovou metodu nevyzkoušel. Co jsem si zažil, je nepopsatelné.",
  },
  {
    name: "Veronika Jiránková",
    role: "manažerka marketingu",
    quote:
      "Kurz mi pomohl silněji identifikovat sama sebe, své hodnoty a za těmi si jít. Každý víkend byl pro mě takovou duševní sprchou.",
  },
  {
    name: "Olga Sládková",
    role: "na volné noze",
    quote:
      "Dalo mi to manžela, dítě, lepší vztahy s rodinou a dalšími lidmi, lepší postavení vůči sama sobě v práci, klid.",
  },
  {
    name: "Lenka Kriegischová",
    role: "vedoucí oddělení, Ministerstvo pro místní rozvoj",
    quote:
      "Každý z víkendů mi dal prostor podívat se sama na sebe. Podívat se na to, co se mi daří a nedaří, jak se cítím. Poznala jsem lépe sama sebe — své přednosti, slabosti, zranitelnosti.",
  },
];

export default function OhlasyPage() {
  return (
    <>
      <Heading level={1}>Co říkají účastníci</Heading>

      {/* 10. ročník */}
      <section className={styles.section}>
        <Heading level={2}>Ohlasy 10. ročníku</Heading>
        <TestimonialGrid testimonials={TESTIMONIALS_10} />
        <div className={styles.cta}>
          <Button href="/nezavazna-prihlaska">Chci se zúčastnit</Button>
        </div>
      </section>

      <Divider />

      {/* 9. ročník */}
      <section className={styles.section}>
        <Heading level={2}>Ohlasy 9. ročníku</Heading>
        <div className={styles.videoFullWidth}>
          <iframe
            src="https://www.youtube.com/embed/GbyGL2GWRdM"
            title="Future Leader — 9. ročník"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.videoIframe}
          />
        </div>
        <TestimonialCard
          name={TESTIMONIALS_9[0].name}
          role={TESTIMONIALS_9[0].role}
          quote={TESTIMONIALS_9[0].quote}
        />
      </section>

      <Divider />

      {/* 4. ročník */}
      <section className={styles.section}>
        <Heading level={2}>Ohlasy 4. ročníku</Heading>
        <a
          href="https://www.futureleader.cz/s/Skola_malych_radosti_2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pdfLink}
        >
          <Image
            src="/images/ohlasy/skola_malych_radosti.webp"
            alt="Škola malých radostí — ohlasy 4. ročníku"
            width={600}
            height={400}
            className={styles.sectionImage}
          />
          <span className={styles.link}>Škola malých radostí (PDF)</span>
        </a>
      </section>

      <Divider />

      {/* 1. a 2. ročník */}
      <section className={styles.section}>
        <Heading level={2}>Ohlasy 1. a 2. ročníku</Heading>
        <div className={styles.videoRow}>
          <div className={styles.videoStandalone}>
            <iframe
              src="https://www.youtube.com/embed/dzX7eOSR3Co"
              title="Future Leader — 1. ročník"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            />
          </div>
          <div className={styles.videoStandalone}>
            <iframe
              src="https://www.youtube.com/embed/Vv_zLOd6FoM"
              title="Future Leader — 2. ročník"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            />
          </div>
        </div>
        <TestimonialGrid testimonials={TESTIMONIALS_1_2} />
        <div className={styles.cta}>
          <Button href="/nezavazna-prihlaska">Chci se zúčastnit</Button>
        </div>
      </section>

      <Divider />

      {/* Jak to začalo */}
      <section className={styles.section}>
        <Heading level={2}>Jak to všechno začalo</Heading>
        <Image
          src="/images/ohlasy/FL_1-2_komunita.webp"
          alt="Komunita Future Leader — společná fotka"
          width={800}
          height={500}
          className={styles.sectionImage}
        />
        <Text>
          Na jedné konferenci ke kvalitě ve vzdělávání se v roce 2012 potkaly tři
          ženy různého věku, názorů a zkušeností (Tamara Kováčová, Silvie Pýchová
          a Ivana Sládková) — a zašly spolu na pivo. A shodly se, že nám v ČR
          chybí trénink, kterého by se účastnili společně jak mladí podnikatelé,
          tak politici spolu s nadšenci z neziskovek. Trénink, který podpoří jejich
          schopnost nacházet správný směr v životě (vybaví je dobrou navigací).
          A během tréninku by vznikaly nové vazby, docházelo by ke vzájemné
          inspiraci, byla by tu možnost pracovat s mentory... . A pak jsme poznaly
          Zdeňka Štěpánka z Koučink akademie (dnes z Akademie), který kurz pro
          mladé lídry před pár lety začal připravovat, stačilo jen navázat.
        </Text>
      </section>
    </>
  );
}
