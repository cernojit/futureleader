import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";

export const metadata: Metadata = {
  title: "O programu",
  description:
    "Future Leader je devítiměsíční seberozvojový program se čtyřmi prodlouženými víkendy pro lídry s odvahou.",
};

export default function OProgramuPage() {
  return (
    <>
      <Heading level={1}>O programu</Heading>
      <Text size="lg" weight="extralight">
        Obsah bude doplněn.
      </Text>
    </>
  );
}
