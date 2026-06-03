"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input/Input";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { Button } from "@/components/atoms/Button/Button";
import { Heading } from "@/components/atoms/Heading/Heading";
import styles from "./ApplicationForm.module.css";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Heading level={2}>Děkujeme!</Heading>
        <p>Brzy se Vám ozveme.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input name="name" label="Jméno" required />
      <Input name="email" label="E-mail" type="email" required />
      <Input name="subject" label="Předmět" placeholder="Mám zájem o Future Leader" />
      <Textarea name="message" label="Zpráva" required />
      <Input name="phone" label="Telefon" type="tel" />
      <Button type="submit" variant="primary">
        Nezávazně rezervovat místo
      </Button>
    </form>
  );
}
