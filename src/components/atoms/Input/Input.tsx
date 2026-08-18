import styles from "./Input.module.css";

type InputProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  hasError = false,
  errorMessage,
  onBlur,
  onChange,
}: InputProps) {
  return (
    <div className={`${styles.field} ${hasError ? styles.invalid : ""}`}>
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
        className={`${styles.input} ${hasError ? styles.invalidInput : ""}`}
        aria-invalid={hasError}
        onBlur={onBlur}
        onChange={onChange}
      />
      {hasError && errorMessage ? <span className={styles.errorMessage}>{errorMessage}</span> : null}
    </div>
  );
}
