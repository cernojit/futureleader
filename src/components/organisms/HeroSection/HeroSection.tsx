import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Button } from "@/components/atoms/Button/Button";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
};

export function HeroSection({ title, subtitle, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.decorCircle} aria-hidden="true" />
      <Heading level={1} className={styles.title}>{title}</Heading>
      <Text size="lg" weight="extralight" className={styles.subtitle}>{subtitle}</Text>
      {ctaText && ctaHref && (
        <Button href={ctaHref} variant="primary">{ctaText}</Button>
      )}
    </section>
  );
}
