import styles from "./Textarea.module.css";

type TextareaProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  hasError?: boolean;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export function Textarea({
  name,
  label,
  required = false,
  placeholder,
  rows = 5,
  hasError = false,
  onBlur,
  onChange,
}: TextareaProps) {
  return (
    <div className={`${styles.field} ${hasError ? styles.invalid : ""}`}>
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
        className={`${styles.textarea} ${hasError ? styles.invalidTextarea : ""}`}
        aria-invalid={hasError}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
}
