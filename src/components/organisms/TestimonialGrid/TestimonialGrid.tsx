import { TestimonialCard } from "@/components/molecules/TestimonialCard/TestimonialCard";
import styles from "./TestimonialGrid.module.css";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type TestimonialGridProps = {
  testimonials: Testimonial[];
};

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className={styles.grid}>
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} />
      ))}
    </div>
  );
}
