import styles from "./Input.module.css";

type InputProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
};

export function Input({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: InputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
