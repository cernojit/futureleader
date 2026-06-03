import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { ApplicationForm } from "@/components/organisms/ApplicationForm/ApplicationForm";

export const metadata: Metadata = {
  title: "Nezávazná přihláška",
  description:
    "Přihlaste se nezávazně do programu Future Leader — seberozvojového programu pro lídry s odvahou.",
};

export default function PrihlaskaPage() {
  return (
    <>
      <Heading level={1}>Nezávazná přihláška</Heading>
      <Text size="lg" weight="extralight">
        Máte zájem o program Future Leader? Vyplňte formulář a my se Vám brzy
        ozveme.
      </Text>
      <ApplicationForm />
    </>
  );
}
