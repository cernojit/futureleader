import styles from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  weight?: "extralight" | "regular" | "semibold";
  className?: string;
};

export function Text({
  children,
  size = "md",
  weight = "regular",
  className,
}: TextProps) {
  return (
    <p className={`${styles.text} ${styles[size]} ${styles[weight]} ${className ?? ""}`}>
      {children}
    </p>
  );
}
