import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <footer className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </footer>
    </article>
  );
}
