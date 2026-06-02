import styles from "./Textarea.module.css";

type TextareaProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

export function Textarea({
  name,
  label,
  required = false,
  placeholder,
  rows = 5,
}: TextareaProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
      />
    </div>
  );
}
