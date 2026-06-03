import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Mám odvahu kvést"
        subtitle="Seberozvojový program pro každého, kdo má odvahu vést. Devět měsíců, čtyři prodloužené víkendy, celoživotní komunita."
        ctaText="Nezávazná přihláška"
        ctaHref="/nezavazna-prihlaska"
      />
      <section>
        <h2>O programu</h2>
        <p>Obsah bude doplněn.</p>
      </section>
    </>
  );
}
