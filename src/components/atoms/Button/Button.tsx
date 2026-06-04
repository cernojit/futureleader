import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  active?: boolean;
  onClick?: () => void;
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
      <a href={href} className={className}>
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
