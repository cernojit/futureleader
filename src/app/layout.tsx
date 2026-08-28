import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { PageLayout } from "@/components/templates/PageLayout/PageLayout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.futureleader.cz"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Future Leader — Program osobního rozvoje",
    template: "%s | Future Leader",
  },
  description:
    "Seberozvojový program pro každého, kdo má odvahu vést. Devět měsíců, čtyři prodloužené víkendy, celoživotní komunita.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    url: "/",
    locale: "cs_CZ",
    type: "website",
    siteName: "Future Leader",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "akáda, z.ú.",
  legalName: "AKÁDA, z.ú.",
  alternateName: "Future Leader",
  url: "https://www.futureleader.cz",
  sameAs: ["https://www.akada.cz/"],
  email: "info@futureleader.cz",
  logo: "https://www.futureleader.cz/logo-symbol.svg",
  identifier: "CZ08744700",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Future Leader",
  url: "https://www.futureleader.cz",
  inLanguage: "cs-CZ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <PageLayout>{children}</PageLayout>
        <Analytics />
      </body>
    </html>
  );
}
