import styles from "./TeamMemberCard.module.css";

type TeamMemberCardProps = {
  name: string;
  role: string;
  description?: string;
};

export function TeamMemberCard({ name, role, description }: TeamMemberCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar} aria-hidden="true" />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.role}>{role}</span>
      {description && <p className={styles.description}>{description}</p>}
    </article>
  );
}
