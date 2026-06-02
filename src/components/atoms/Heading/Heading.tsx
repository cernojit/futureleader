import styles from "./Heading.module.css";

type HeadingProps = {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
};

export function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={`${styles.heading} ${styles[`h${level}`]} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
