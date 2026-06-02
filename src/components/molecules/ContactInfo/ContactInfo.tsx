import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  name?: string;
  email: string;
  phone?: string;
};

export function ContactInfo({ name, email, phone }: ContactInfoProps) {
  return (
    <address className={styles.contact}>
      {name && <span className={styles.name}>{name}</span>}
      <a href={`mailto:${email}`} className={styles.link}>{email}</a>
      {phone && <a href={`tel:${phone}`} className={styles.link}>{phone}</a>}
    </address>
  );
}
