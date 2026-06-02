# Future Leader — Web Redesign Design Spec

## Overview

Redesign webu futureleader.cz s novou vizuální identitou organizace Akáda. Migrace ze Squarespace na Next.js (App Router) se statickým exportem. Atomic design, TypeScript, CSS Modules.

## Rozhodnutí

- **Multi-page** — každá položka navigace je samostatná stránka s vlastní URL
- **Statický export** (`output: 'export'`) — žádný server, jednoduché hostování
- **Formulář bez API** — pouze frontend, backend se doplní později
- **Stránky Domů a O programu** — placeholder obsah (nový obsah dodá uživatel)
- **Stránky Dílo z dílů, Ohlasy, Přihláška** — obsah převzatý z aktuálního webu

## Brand Identity

### Barvy

| Token                  | Hodnota   | Použití                        |
|------------------------|-----------|--------------------------------|
| `--color-primary`      | `#2d3e3f` | Hlavní tmavý petrolejový       |
| `--color-accent-coral` | `#c96b56` | Korálová — energie, CTA        |
| `--color-accent-yellow`| `#f0c744` | Žlutá — akcenty, zvýraznění    |
| `--color-accent-pink`  | `#e8bfb5` | Světle růžová — jemné pozadí   |
| `--color-accent-grey`  | `#c8c8c8` | Šedá — doplňková               |
| `--color-white`        | `#ffffff` | Pozadí                         |

### Typografie

- **Font:** Poppins (Google Fonts, přes `next/font/google`)
- **Váhy:** Extra Light (200), Regular (400), Semi Bold (600)
- **Použití:** Heading = Semi Bold, Body = Regular, Subtitles = Extra Light

### Logo

- Symbol: soustava bodů rozvíjejících se ze středu + text "Future Leader"
- Umístění: header vlevo
- SVG formát pro ostrost na všech zařízeních

## Stránky

### 1. Domů (`/`)

- Hero sekce s logem a tagline (placeholder)
- Stručný úvod do programu (placeholder)
- CTA tlačítko na přihlášku

### 2. O programu (`/o-programu`)

- Popis programu (placeholder)
- Termíny, cena, lokalita (placeholder)
- Lektoři a tým (placeholder)

### 3. Dílo z dílů (`/dilo-z-dilu`)

- Příběh uměleckého díla od Anny Štěpánkové
- Koncept kinetického umění inspirovaného Calderem
- Symbolika — harmonie polarit
- O autorce
- Kontakt na Ivanu Sládkovou

### 4. Ohlasy (`/ohlasy`)

- Testimonials z 10. běhu: Nicole Martincová, Martin Bak, Zuzana Kuberová, Jiří Tatíček, Lucie Deptová, Magdalena Hubená
- Starší ohlasy
- Historie programu (založen 2012)

### 5. Nezávazná přihláška (`/nezavazna-prihlaska`)

- Formulář: Jméno, E-mail, Předmět, Zpráva, Telefon
- Tlačítko "Nezávazně rezervovat místo"
- Potvrzovací zpráva (client-side)
- Bez API — pouze frontend validace

## Architektura — Atomic Design

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/          Button.tsx + Button.module.css
│   │   ├── Logo/            Logo.tsx + Logo.module.css (SVG)
│   │   ├── Heading/         Heading.tsx + Heading.module.css (h1-h4)
│   │   ├── Text/            Text.tsx + Text.module.css (p, span)
│   │   ├── Input/           Input.tsx + Input.module.css
│   │   └── Textarea/        Textarea.tsx + Textarea.module.css
│   ├── molecules/
│   │   ├── NavLink/         NavLink.tsx + NavLink.module.css
│   │   ├── ContactInfo/     ContactInfo.tsx + ContactInfo.module.css
│   │   ├── TestimonialCard/ TestimonialCard.tsx + TestimonialCard.module.css
│   │   ├── TeamMemberCard/  TeamMemberCard.tsx + TeamMemberCard.module.css
│   │   └── FormField/       FormField.tsx + FormField.module.css
│   ├── organisms/
│   │   ├── Header/          Header.tsx + Header.module.css
│   │   ├── Footer/          Footer.tsx + Footer.module.css
│   │   ├── Navigation/      Navigation.tsx + Navigation.module.css
│   │   ├── HeroSection/     HeroSection.tsx + HeroSection.module.css
│   │   ├── TestimonialGrid/ TestimonialGrid.tsx + TestimonialGrid.module.css
│   │   └── ApplicationForm/ ApplicationForm.tsx + ApplicationForm.module.css
│   └── templates/
│       └── PageLayout/      PageLayout.tsx + PageLayout.module.css
├── app/
│   ├── layout.tsx           Root layout — Poppins, globální metadata
│   ├── page.tsx             Domů
│   ├── o-programu/page.tsx  O programu
│   ├── dilo-z-dilu/page.tsx Dílo z dílů
│   ├── ohlasy/page.tsx      Ohlasy
│   └── nezavazna-prihlaska/page.tsx  Přihláška
└── styles/
    ├── globals.css          Reset, base styles
    └── variables.css        CSS custom properties (barvy, fonty, spacing)
```

## SEO

- **Metadata:** Unikátní title + description na každé stránce přes `export const metadata`
- **Sémantické HTML:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **Sitemap:** Generovaný přes `app/sitemap.ts`
- **Robots:** `app/robots.ts`
- **Open Graph:** og:title, og:description, og:image na každé stránce
- **Jazyk:** `<html lang="cs">`

## Technický stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **CSS Modules** (`.module.css`)
- **Poppins** přes `next/font/google`
- **Statický export** (`output: 'export'` v `next.config.ts`)
- **Node.js 20+**

## Scope první fáze

Cíl: funkční multi-page web s novou identitou, navigací a základní strukturou stránek. Obsah pro Domů a O programu bude placeholder, zbytek převzatý z aktuálního webu. Formulář pouze frontend bez odesílání dat.
