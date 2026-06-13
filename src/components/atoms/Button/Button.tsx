import styles from "./Button.module.css";

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly href?: string;
  readonly type?: "button" | "submit";
  readonly active?: boolean;
  readonly onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  active = false,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${active ? styles.active : ""}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
