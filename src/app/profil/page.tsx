import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { ProfileForm } from "@/components/organisms/ProfileForm/ProfileForm";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Upravte a doplňte informace o svém profilu v programu Future Leader.",
};

export default function ProfilPage() {
  return (
    <>
      <Heading level={1}>Profil</Heading>
      <Text size="lg" weight="extralight">
        Doplněte údaje pro svůj profil. Formulář je připraven pro další úpravy
        podle konkrétních požadavků.
      </Text>
      <ProfileForm />
    </>
  );
}
