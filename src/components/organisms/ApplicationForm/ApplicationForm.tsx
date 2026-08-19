"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/atoms/Input/Input";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { Button } from "@/components/atoms/Button/Button";
import { Heading } from "@/components/atoms/Heading/Heading";
import styles from "./ApplicationForm.module.css";

const REQUIRED_FIELDS = ["name", "email", "message"] as const;

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validateField(name: string, value: string) {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return false;
    }

    if (name === "email") {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(trimmedValue);
    }

    return true;
  }

  function updateFieldError(name: string) {
    const field = formRef.current?.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    const value = field?.value ?? "";
    const hasError = !validateField(name, value);

    setErrors((previous) => ({
      ...previous,
      [name]: hasError,
    }));

    return hasError;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setNotice(null);

    const formData = new FormData(formRef.current!);
    const nextErrors: Record<string, boolean> = {};

    REQUIRED_FIELDS.forEach((field) => {
      const value = String(formData.get(field) ?? "");
      nextErrors[field] = !validateField(field, value);
    });

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setLoading(false);
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      phone: formData.get("phone"),
    };

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setNotice("Odesílání přihlášek je dočasně pozastavené. Opravíme to co nejdříve.");
        alert("Chyba při odesílání formuláře. Zkuste to prosím znovu.");
      }
    } catch (error) {
      console.error(error);
      setNotice("Odesílání přihlášek je dočasně pozastavené. Opravíme to co nejdříve.");
      alert("Chyba při odesílání formuláře. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Heading level={2}>Děkujeme!</Heading>
        <p>Brzy se Vám ozveme. Ověřovací email jsme poslali na vašu emailovou adresu.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>
      <Input
        name="name"
        label="Jméno"
        required
        hasError={Boolean(errors.name)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Input
        name="email"
        label="E-mail"
        type="email"
        required
        hasError={Boolean(errors.email)}
        errorMessage="Zadejte platný e-mail."
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Input name="subject" label="Předmět" placeholder="Mám zájem o Future Leader" />
      <Textarea
        name="message"
        label="Zpráva"
        required
        hasError={Boolean(errors.message)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Input name="phone" label="Telefon" type="tel" />
     <p className={styles.helperText}>
        Pole označená hvězdičkou (*) jsou povinná.
      </p>

      {notice && <p className={styles.notice}>{notice}</p>}

      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Odesílání..." : "Nezávazně rezervovat místo"}
      </Button>
    </form>
  );
}
