"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/atoms/Input/Input";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { Button } from "@/components/atoms/Button/Button";
import { Heading } from "@/components/atoms/Heading/Heading";
import styles from "./ProfileForm.module.css";

const REQUIRED_FIELDS = [
  "mojeJmeno",
  "mujEmail",
  "mujVek",
  "typickeVlastnosti",
  "coMeBavi",
  "zkusenostiVzdelani",
  "kurzyAkyce",
  "coMeZivi",
  "uspech",
  "prekazka",
  "ocekavani",
  "kontakty",
  "faktura",
] as const;

export function ProfileForm() {
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

    if (name === "mujEmail") {
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

    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setNotice("Odesílání profilů je dočasně pozastavené. Opravíme to co nejdříve.");
        alert("Chyba při odesílání profilu. Zkuste to prosím znovu.");
      }
    } catch (error) {
      console.error(error);
      setNotice("Odesílání profilů je dočasně pozastavené. Opravíme to co nejdříve.");
      alert("Při odesílání formuláře došlo k chybě. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Heading level={2}>Profil byl uložen</Heading>
        <p>Vaše údaje jsme přijali. Potvrzení jsme poslali na váš e-mail.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>
      <p className={styles.helperText}>
        Pole označená hvězdičkou (*) jsou povinná. Vyplnění všech údajů je
        důležité pro správné zpracování vašeho profilu.
      </p>
      <Input
        name="mojeJmeno"
        label="Moje jméno"
        required
        hasError={Boolean(errors.mojeJmeno)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Input
        name="mujEmail"
        label="Můj e-mail"
        type="email"
        required
        hasError={Boolean(errors.mujEmail)}
        errorMessage="Zadejte platný e-mail."
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Input
        name="mujVek"
        label="Můj věk / na kolik se dnes cítím"
        required
        hasError={Boolean(errors.mujVek)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="typickeVlastnosti"
        label="Co je pro mne typické / charakteristické?"
        required
        hasError={Boolean(errors.typickeVlastnosti)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="coMeBavi"
        label="Co mne baví?"
        required
        hasError={Boolean(errors.coMeBavi)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="zkusenostiVzdelani"
        label="Jaké mám zkušeností, jaké vzdělání?"
        required
        hasError={Boolean(errors.zkusenostiVzdelani)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="kurzyAkyce"
        label="Jaké kurzy / akce, kterými jsem prošel/a, považuji pro mne za osobně významné / prospěšné?"
        required
        hasError={Boolean(errors.kurzyAkyce)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="coMeZivi"
        label="Co mne živí a co dělám dobrovolně - tzn. v jakém jsem spolku, klubu, ...?"
        required
        hasError={Boolean(errors.coMeZivi)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="uspech"
        label="Co považuji za svůj pro mne osobně důležitý úspěch v práci či v životě?"
        required
        hasError={Boolean(errors.uspech)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="prekazka"
        label="Kterou životní překážku považuji za dosud nejtěžší ve svém životě?"
        required
        hasError={Boolean(errors.prekazka)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="ocekavani"
        label="Co konkrétního od kurzu očekávám?"
        required
        hasError={Boolean(errors.ocekavani)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="kontakty"
        label="Na jakých dalších kontaktech jsem k zastižení?"
        required
        hasError={Boolean(errors.kontakty)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      <Textarea
        name="faktura"
        label="Kdo zaplatí můj poplatek za kurz? Komu máme poslat fakturu a v jaké výši? (Fakturu posíláme až po prvním setkání)."
        required
        hasError={Boolean(errors.faktura)}
        onBlur={(event) => updateFieldError(event.currentTarget.name)}
        onChange={(event) => updateFieldError(event.currentTarget.name)}
      />
      {notice && <p className={styles.notice}>{notice}</p>}
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Odesílání..." : "Odeslat profil účastníka"}
      </Button>
    </form>
  );
}
