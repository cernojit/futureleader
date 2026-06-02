import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "400", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Future Leader — Program osobního rozvoje",
    template: "%s | Future Leader",
  },
  description:
    "Seberozvojový program pro každého, kdo má odvahu vést. Devět měsíců, čtyři prodloužené víkendy, celoživotní komunita.",
  openGraph: {
    locale: "cs_CZ",
    type: "website",
    siteName: "Future Leader",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
