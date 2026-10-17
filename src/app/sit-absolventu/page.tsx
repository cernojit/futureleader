import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Card } from "@/components/atoms/Card/Card";
import styles from "./page.module.css";

const ALUMNI_PROJECTS = [
  { name: "Na ovoce", href: "https://na-ovoce.cz/web/", image: "/images/sit-absolventu/na-ovoce.png", width: 400, height: 195 },
  { name: "Dobrokáva", href: "https://www.dobrokava.cz/", image: "/images/sit-absolventu/dobrokava.png", width: 1200, height: 630 },
  { name: "Fabini", href: "https://www.fabini.cz/", image: "/images/sit-absolventu/fabini.png", width: 1200, height: 628 },
  { name: "Zahrada života", href: "https://www.zahrada-zivota.cz/", image: "/images/sit-absolventu/zahrada-zivota.jpg", width: 1920, height: 959 },
  { name: "Masopust", href: "https://www.masopust.store/", image: "/images/sit-absolventu/masopust.jpg", width: 399, height: 121 },
  { name: "Rekola", href: "https://www.rekola.cz/", image: "/images/sit-absolventu/rekola.png", width: 600, height: 271 },
  { name: "Inspirata", href: "https://inspirata.cz/", image: "/images/sit-absolventu/inspirata.png", width: 1010, height: 440 },
  { name: "Pozitivní zprávy", href: "https://pozitivni-zpravy.cz/", image: "/images/sit-absolventu/pozitivni-zpravy.png", width: 880, height: 172 },
  { name: "GovLab", href: "https://govlab.cz/", image: "/images/sit-absolventu/govlab-cropped-square.png", width: 140, height: 140 },
  { name: "Výdejna chutí", href: "https://www.vydejnachuti.cz/", image: "/images/sit-absolventu/vydejna-chuti.jpg", width: 586, height: 111 },
  { name: "Your Consulting", href: "https://www.yourconsulting.cz/", image: "/images/sit-absolventu/yourconsulting.jpg", width: 200, height: 100 },
  { name: "Cestuj za babku", href: "https://www.cestujzababku.cz/", image: "/images/sit-absolventu/cestuj-zababku.png", width: 471, height: 107 },
  { name: "Malé radosti", href: "https://maleradosti.art/", image: "/images/sit-absolventu/male-radosti.jpg", width: 985, height: 620 },
] as const;

export const metadata: Metadata = {
  title: "Síť absolventů",
  description: "Síť absolventů programu Future Leader.",
};

export default function SitAbsolventuPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Síť absolventů</span>
          <Heading level={1} className={styles.heroText}>Future Leader nekončí posledním víkendem</Heading>
          <Heading level={3} className={`${styles.lead} ${styles.heroText}`}>
            Absolventi se mohou připojit do sítě lidí, kteří se podporují, propojují a
            společně tvoří.
          </Heading>
        </div>
      </section>

      <section className={styles.communityPanel}>
        <Card
          header={<Heading level={3}>Absolventi mohou vstoupit do komunity Sítě absolventů Future Leader, ve které:</Heading>}
          text={
            <>
              <ul className={styles.bulletList}>
                <li>se podporují,</li>
                <li>jsou propojeni na hlubší úrovni,</li>
                <li>sdílí projekty,</li>
                <li>tvoří spolupráce,</li>
                <li>inspirují se navzájem.</li>
              </ul>
            </>
          }
        />
      </section>

      <section className={styles.projectsSection} aria-label="Projekty absolventů">
        <Heading level={2} className={styles.projectsHeading}>
          Projekty absolventů
        </Heading>
        <ul className={styles.projectsGrid}>
          {ALUMNI_PROJECTS.map((project) => (
            <li key={project.name} className={styles.projectItem}>
              <a
                className={styles.projectLink}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.name}
              >
                <span className={styles.projectLogo}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 600px) 40vw, 180px"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
