import { TestimonialCard } from "@/components/molecules/TestimonialCard/TestimonialCard";
import styles from "./TestimonialGrid.module.css";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type VideoItem = {
  youtubeId: string;
  title: string;
};

type GridItem =
  | ({ type?: "testimonial" } & Testimonial)
  | ({ type: "video" } & VideoItem);

type TestimonialGridProps = {
  testimonials?: Testimonial[];
  items?: GridItem[];
};

export function TestimonialGrid({ testimonials, items }: TestimonialGridProps) {
  const gridItems: GridItem[] = items ?? (testimonials ?? []).map((t) => ({ ...t }));

  return (
    <div className={styles.grid}>
      {gridItems.map((item) => {
        if ("type" in item && item.type === "video") {
          return (
            <div key={item.youtubeId} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                />
              </div>
              <span className={styles.videoTitle}>{item.title}</span>
            </div>
          );
        }

        const t = item as Testimonial;
        return (
          <TestimonialCard
            key={t.name}
            name={t.name}
            role={t.role}
            quote={t.quote}
          />
        );
      })}
    </div>
  );
}
