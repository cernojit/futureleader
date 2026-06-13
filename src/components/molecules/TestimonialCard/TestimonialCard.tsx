import { Card } from "@/components/atoms/Card/Card";
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  readonly name: string;
  readonly role: string;
  readonly quote: string;
  readonly picture?: React.ReactNode;
};

export function TestimonialCard({ name, role, quote, picture }: TestimonialCardProps) {
  return (
    <Card
      className={styles.card}
      text={
        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>
      }
      picture={picture}
      footer={
        <div className={styles.footer}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      }
    />
  );
}
