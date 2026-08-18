import styles from "./Button.module.css";

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly href?: string;
  readonly type?: "button" | "submit";
  readonly active?: boolean;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  active = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${active ? styles.active : ""}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={disabled ? undefined : onClick} aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
}
