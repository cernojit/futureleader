import styles from "./Card.module.css";

type CardProps = {
  readonly header?: React.ReactNode;
  readonly text?: React.ReactNode;
  readonly picture?: React.ReactNode;
  readonly footer?: React.ReactNode;
  readonly className?: string;
};

export function Card({ header, text, picture, footer, className }: CardProps) {
  return (
    <article className={`${styles.card} ${className ?? ""}`.trim()}>
      {header ? <header className={styles.sectionHeader}>{header}</header> : null}
      {text ? <div className={styles.section}>{text}</div> : null}
      {picture ? <div className={styles.picture}>{picture}</div> : null}
      {footer ? <footer className={styles.section}>{footer}</footer> : null}
    </article>
  );
}
