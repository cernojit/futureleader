# Future Leader Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page Next.js static website for Future Leader with new Akáda brand identity, atomic design components, and SEO optimization.

**Architecture:** Next.js 15 App Router with static export. Atomic design (atoms → molecules → organisms → templates). CSS Modules for styling with CSS custom properties for design tokens. Poppins font via next/font/google.

**Tech Stack:** Next.js 15, TypeScript (strict), CSS Modules, next/font/google (Poppins)

---

### Task 1: Project scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/styles/variables.css`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Initialize Next.js project**

Run:
```bash
cd /Users/jitka.cernohorska/work/my-repositories/akada/futureleader
npx create-next-app@latest . --typescript --app --src-dir --no-tailwind --no-eslint --import-alias "@/*"
```

When prompted: accept defaults, say No to Turbopack.

- [ ] **Step 2: Configure static export in next.config.ts**

Replace `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

- [ ] **Step 3: Create design tokens in src/styles/variables.css**

```css
:root {
  /* Colors */
  --color-primary: #2d3e3f;
  --color-accent-coral: #c96b56;
  --color-accent-yellow: #f0c744;
  --color-accent-pink: #e8bfb5;
  --color-accent-grey: #c8c8c8;
  --color-white: #ffffff;
  --color-bg: #ffffff;
  --color-text: #2d3e3f;

  /* Typography */
  --font-weight-extralight: 200;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  --spacing-2xl: 6rem;

  /* Layout */
  --max-width: 1200px;
  --header-height: 80px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

- [ ] **Step 4: Create globals.css with reset and base styles**

Replace `src/styles/globals.css` (delete the default one created by create-next-app, create in `src/styles/`):

```css
@import "./variables.css";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
}

input, textarea {
  font: inherit;
  color: inherit;
}
```

- [ ] **Step 5: Update root layout with Poppins font**

Replace `src/app/layout.tsx`:

```tsx
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
```

- [ ] **Step 6: Create minimal homepage**

Replace `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main>
      <h1>Future Leader</h1>
      <p>Stránka ve výstavbě</p>
    </main>
  );
}
```

- [ ] **Step 7: Clean up create-next-app defaults**

Delete these files if they exist:
- `src/app/globals.css`
- `src/app/page.module.css`
- `src/app/favicon.ico` (will be replaced later)
- `public/next.svg`
- `public/vercel.svg`

- [ ] **Step 8: Verify the app runs**

Run:
```bash
npm run build && npm run dev
```

Expected: App builds with static export, dev server starts at localhost:3000, page shows "Future Leader" heading.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Poppins font and design tokens"
```

---

### Task 2: Atoms — Button, Heading, Text

**Files:**
- Create: `src/components/atoms/Button/Button.tsx`
- Create: `src/components/atoms/Button/Button.module.css`
- Create: `src/components/atoms/Heading/Heading.tsx`
- Create: `src/components/atoms/Heading/Heading.module.css`
- Create: `src/components/atoms/Text/Text.tsx`
- Create: `src/components/atoms/Text/Text.module.css`

- [ ] **Step 1: Create Button atom**

`src/components/atoms/Button/Button.tsx`:

```tsx
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
```

`src/components/atoms/Button/Button.module.css`:

```css
.button {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: var(--font-weight-semibold);
  font-size: 1rem;
  border-radius: var(--radius-md);
  transition: opacity 0.2s ease;
  text-align: center;
}

.button:hover {
  opacity: 0.85;
}

.primary {
  background-color: var(--color-accent-coral);
  color: var(--color-white);
}

.secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}
```

- [ ] **Step 2: Create Heading atom**

`src/components/atoms/Heading/Heading.tsx`:

```tsx
import styles from "./Heading.module.css";

type HeadingProps = {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
};

export function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={`${styles.heading} ${styles[`h${level}`]} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
```

`src/components/atoms/Heading/Heading.module.css`:

```css
.heading {
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  line-height: 1.2;
}

.h1 {
  font-size: 3rem;
}

.h2 {
  font-size: 2rem;
}

.h3 {
  font-size: 1.5rem;
}

.h4 {
  font-size: 1.25rem;
}
```

- [ ] **Step 3: Create Text atom**

`src/components/atoms/Text/Text.tsx`:

```tsx
import styles from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  weight?: "extralight" | "regular" | "semibold";
  className?: string;
};

export function Text({
  children,
  size = "md",
  weight = "regular",
  className,
}: TextProps) {
  return (
    <p className={`${styles.text} ${styles[size]} ${styles[weight]} ${className ?? ""}`}>
      {children}
    </p>
  );
}
```

`src/components/atoms/Text/Text.module.css`:

```css
.text {
  color: var(--color-text);
  line-height: 1.6;
}

.sm { font-size: 0.875rem; }
.md { font-size: 1rem; }
.lg { font-size: 1.125rem; }

.extralight { font-weight: var(--font-weight-extralight); }
.regular { font-weight: var(--font-weight-regular); }
.semibold { font-weight: var(--font-weight-semibold); }
```

- [ ] **Step 4: Verify build**

Run:
```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/atoms/
git commit -m "feat: add Button, Heading, and Text atoms"
```

---

### Task 3: Atoms — Logo, Input, Textarea

**Files:**
- Create: `src/components/atoms/Logo/Logo.tsx`
- Create: `src/components/atoms/Logo/Logo.module.css`
- Create: `src/components/atoms/Input/Input.tsx`
- Create: `src/components/atoms/Input/Input.module.css`
- Create: `src/components/atoms/Textarea/Textarea.tsx`
- Create: `src/components/atoms/Textarea/Textarea.module.css`
- Create: `public/logo.svg`

- [ ] **Step 1: Create Logo SVG placeholder**

`public/logo.svg` — a placeholder SVG (the real SVG will be provided by the user later). For now, use the dot-spiral pattern from the brand identity as a simplified version:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="#2d3e3f">
  <circle cx="20" cy="20" r="2"/><circle cx="14" cy="20" r="1.5"/><circle cx="26" cy="20" r="1.5"/>
  <circle cx="20" cy="14" r="1.5"/><circle cx="20" cy="26" r="1.5"/>
  <circle cx="8" cy="20" r="1"/><circle cx="32" cy="20" r="1"/>
  <circle cx="20" cy="8" r="1"/><circle cx="20" cy="32" r="1"/>
  <circle cx="15" cy="15" r="1.2"/><circle cx="25" cy="15" r="1.2"/>
  <circle cx="15" cy="25" r="1.2"/><circle cx="25" cy="25" r="1.2"/>
  <text x="44" y="27" font-family="Poppins, sans-serif" font-size="18" font-weight="600">Future Leader</text>
</svg>
```

- [ ] **Step 2: Create Logo atom**

`src/components/atoms/Logo/Logo.tsx`:

```tsx
import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  width?: number;
  height?: number;
};

export function Logo({ width = 200, height = 40 }: LogoProps) {
  return (
    <a href="/" className={styles.logo}>
      <Image src="/logo.svg" alt="Future Leader" width={width} height={height} priority />
    </a>
  );
}
```

`src/components/atoms/Logo/Logo.module.css`:

```css
.logo {
  display: inline-flex;
  align-items: center;
}
```

- [ ] **Step 3: Create Input atom**

`src/components/atoms/Input/Input.tsx`:

```tsx
import styles from "./Input.module.css";

type InputProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
};

export function Input({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: InputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
```

`src/components/atoms/Input/Input.module.css`:

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.required {
  color: var(--color-accent-coral);
}

.input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-accent-grey);
  border-radius: var(--radius-sm);
  background: var(--color-white);
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
}
```

- [ ] **Step 4: Create Textarea atom**

`src/components/atoms/Textarea/Textarea.tsx`:

```tsx
import styles from "./Textarea.module.css";

type TextareaProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

export function Textarea({
  name,
  label,
  required = false,
  placeholder,
  rows = 5,
}: TextareaProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
      />
    </div>
  );
}
```

`src/components/atoms/Textarea/Textarea.module.css`:

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.required {
  color: var(--color-accent-coral);
}

.textarea {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-accent-grey);
  border-radius: var(--radius-sm);
  background: var(--color-white);
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/atoms/Logo src/components/atoms/Input src/components/atoms/Textarea public/logo.svg
git commit -m "feat: add Logo, Input, and Textarea atoms"
```

---

### Task 4: Molecules — NavLink, ContactInfo, TestimonialCard, TeamMemberCard

**Files:**
- Create: `src/components/molecules/NavLink/NavLink.tsx`
- Create: `src/components/molecules/NavLink/NavLink.module.css`
- Create: `src/components/molecules/ContactInfo/ContactInfo.tsx`
- Create: `src/components/molecules/ContactInfo/ContactInfo.module.css`
- Create: `src/components/molecules/TestimonialCard/TestimonialCard.tsx`
- Create: `src/components/molecules/TestimonialCard/TestimonialCard.module.css`
- Create: `src/components/molecules/TeamMemberCard/TeamMemberCard.tsx`
- Create: `src/components/molecules/TeamMemberCard/TeamMemberCard.module.css`

- [ ] **Step 1: Create NavLink molecule**

`src/components/molecules/NavLink/NavLink.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${styles.link} ${isActive ? styles.active : ""}`}>
      {children}
    </Link>
  );
}
```

`src/components/molecules/NavLink/NavLink.module.css`:

```css
.link {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  transition: color 0.2s ease;
  position: relative;
}

.link:hover {
  color: var(--color-accent-coral);
}

.active {
  font-weight: var(--font-weight-semibold);
}

.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: var(--spacing-sm);
  right: var(--spacing-sm);
  height: 2px;
  background-color: var(--color-accent-coral);
}
```

- [ ] **Step 2: Create ContactInfo molecule**

`src/components/molecules/ContactInfo/ContactInfo.tsx`:

```tsx
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  name?: string;
  email: string;
  phone?: string;
};

export function ContactInfo({ name, email, phone }: ContactInfoProps) {
  return (
    <address className={styles.contact}>
      {name && <span className={styles.name}>{name}</span>}
      <a href={`mailto:${email}`} className={styles.link}>{email}</a>
      {phone && <a href={`tel:${phone}`} className={styles.link}>{phone}</a>}
    </address>
  );
}
```

`src/components/molecules/ContactInfo/ContactInfo.module.css`:

```css
.contact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  font-style: normal;
}

.name {
  font-weight: var(--font-weight-semibold);
}

.link {
  color: var(--color-accent-coral);
  transition: opacity 0.2s ease;
}

.link:hover {
  opacity: 0.7;
}
```

- [ ] **Step 3: Create TestimonialCard molecule**

`src/components/molecules/TestimonialCard/TestimonialCard.tsx`:

```tsx
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <footer className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </footer>
    </article>
  );
}
```

`src/components/molecules/TestimonialCard/TestimonialCard.module.css`:

```css
.card {
  background-color: var(--color-white);
  border-left: 4px solid var(--color-accent-coral);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}

.quote {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.footer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.name {
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.role {
  font-size: 0.875rem;
  font-weight: var(--font-weight-extralight);
  color: var(--color-primary);
}
```

- [ ] **Step 4: Create TeamMemberCard molecule**

`src/components/molecules/TeamMemberCard/TeamMemberCard.tsx`:

```tsx
import styles from "./TeamMemberCard.module.css";

type TeamMemberCardProps = {
  name: string;
  role: string;
  description?: string;
};

export function TeamMemberCard({ name, role, description }: TeamMemberCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar} aria-hidden="true" />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.role}>{role}</span>
      {description && <p className={styles.description}>{description}</p>}
    </article>
  );
}
```

`src/components/molecules/TeamMemberCard/TeamMemberCard.module.css`:

```css
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-sm);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-accent-pink);
}

.name {
  font-size: 1.125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.role {
  font-size: 0.875rem;
  font-weight: var(--font-weight-extralight);
  color: var(--color-primary);
}

.description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text);
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/molecules/
git commit -m "feat: add NavLink, ContactInfo, TestimonialCard, and TeamMemberCard molecules"
```

---

### Task 5: Organisms — Header, Footer, Navigation

**Files:**
- Create: `src/components/organisms/Header/Header.tsx`
- Create: `src/components/organisms/Header/Header.module.css`
- Create: `src/components/organisms/Navigation/Navigation.tsx`
- Create: `src/components/organisms/Navigation/Navigation.module.css`
- Create: `src/components/organisms/Footer/Footer.tsx`
- Create: `src/components/organisms/Footer/Footer.module.css`

- [ ] **Step 1: Create Navigation organism**

`src/components/organisms/Navigation/Navigation.tsx`:

```tsx
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Úvod" },
  { href: "/o-programu", label: "O programu" },
  { href: "/dilo-z-dilu", label: "Dílo z dílů" },
  { href: "/ohlasy", label: "Ohlasy" },
  { href: "/nezavazna-prihlaska", label: "Přihláška" },
];

export function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Hlavní navigace">
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

`src/components/organisms/Navigation/Navigation.module.css`:

```css
.nav {
  display: flex;
  align-items: center;
}

.list {
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .list {
    gap: var(--spacing-sm);
  }
}
```

- [ ] **Step 2: Create Header organism**

`src/components/organisms/Header/Header.tsx`:

```tsx
import { Logo } from "@/components/atoms/Logo/Logo";
import { Navigation } from "@/components/organisms/Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
```

`src/components/organisms/Header/Header.module.css`:

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-accent-grey);
  height: var(--header-height);
  display: flex;
  align-items: center;
}

.inner {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

- [ ] **Step 3: Create Footer organism**

`src/components/organisms/Footer/Footer.tsx`:

```tsx
import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.org}>
          <span className={styles.name}>AKÁDA, z.ú.</span>
          <span className={styles.tagline}>Inkubátor nových příběhů</span>
          <span className={styles.ico}>IČO: 08744700</span>
        </div>
        <ContactInfo
          name="Ivana Sládková"
          email="info@futureleader.cz"
          phone="+420 724 030 480"
        />
        <div className={styles.copy}>
          <span>&copy; {new Date().getFullYear()} Future Leader</span>
        </div>
      </div>
    </footer>
  );
}
```

`src/components/organisms/Footer/Footer.module.css`:

```css
.footer {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xl) 0;
  margin-top: var(--spacing-2xl);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.org {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.name {
  font-weight: var(--font-weight-semibold);
  font-size: 1.125rem;
}

.tagline {
  font-weight: var(--font-weight-extralight);
  font-size: 0.875rem;
}

.ico {
  font-size: 0.75rem;
  opacity: 0.7;
}

.copy {
  text-align: right;
  font-size: 0.75rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .copy {
    text-align: center;
  }
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/organisms/
git commit -m "feat: add Header, Navigation, and Footer organisms"
```

---

### Task 6: Template — PageLayout + integrate into root layout

**Files:**
- Create: `src/components/templates/PageLayout/PageLayout.tsx`
- Create: `src/components/templates/PageLayout/PageLayout.module.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create PageLayout template**

`src/components/templates/PageLayout/PageLayout.tsx`:

```tsx
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
```

`src/components/templates/PageLayout/PageLayout.module.css`:

```css
.main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-lg);
  min-height: calc(100vh - var(--header-height) - 200px);
}
```

- [ ] **Step 2: Integrate PageLayout into root layout**

Update `src/app/layout.tsx` — add PageLayout wrapping children:

```tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PageLayout } from "@/components/templates/PageLayout/PageLayout";
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
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify build and visual check**

Run: `npm run build && npm run dev`
Expected: App shows header with logo + navigation, main content area, and footer with Akáda info.

- [ ] **Step 4: Commit**

```bash
git add src/components/templates/ src/app/layout.tsx
git commit -m "feat: add PageLayout template and integrate into root layout"
```

---

### Task 7: Organisms — HeroSection, ApplicationForm, TestimonialGrid

**Files:**
- Create: `src/components/organisms/HeroSection/HeroSection.tsx`
- Create: `src/components/organisms/HeroSection/HeroSection.module.css`
- Create: `src/components/organisms/ApplicationForm/ApplicationForm.tsx`
- Create: `src/components/organisms/ApplicationForm/ApplicationForm.module.css`
- Create: `src/components/organisms/TestimonialGrid/TestimonialGrid.tsx`
- Create: `src/components/organisms/TestimonialGrid/TestimonialGrid.module.css`

- [ ] **Step 1: Create HeroSection organism**

`src/components/organisms/HeroSection/HeroSection.tsx`:

```tsx
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { Button } from "@/components/atoms/Button/Button";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
};

export function HeroSection({ title, subtitle, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <Heading level={1}>{title}</Heading>
      <Text size="lg" weight="extralight">{subtitle}</Text>
      {ctaText && ctaHref && (
        <Button href={ctaHref} variant="primary">{ctaText}</Button>
      )}
    </section>
  );
}
```

`src/components/organisms/HeroSection/HeroSection.module.css`:

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-accent-pink);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-xl);
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}
```

- [ ] **Step 2: Create ApplicationForm organism**

`src/components/organisms/ApplicationForm/ApplicationForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input/Input";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { Button } from "@/components/atoms/Button/Button";
import { Heading } from "@/components/atoms/Heading/Heading";
import styles from "./ApplicationForm.module.css";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Heading level={2}>Děkujeme!</Heading>
        <p>Brzy se Vám ozveme.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input name="name" label="Jméno" required />
      <Input name="email" label="E-mail" type="email" required />
      <Input name="subject" label="Předmět" placeholder="Mám zájem o Future Leader" />
      <Textarea name="message" label="Zpráva" required />
      <Input name="phone" label="Telefon" type="tel" />
      <Button type="submit" variant="primary">
        Nezávazně rezervovat místo
      </Button>
    </form>
  );
}
```

`src/components/organisms/ApplicationForm/ApplicationForm.module.css`:

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 600px;
}

.success {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background-color: var(--color-accent-pink);
  border-radius: var(--radius-md);
  text-align: center;
}
```

- [ ] **Step 3: Create TestimonialGrid organism**

`src/components/organisms/TestimonialGrid/TestimonialGrid.tsx`:

```tsx
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
```

`src/components/organisms/TestimonialGrid/TestimonialGrid.module.css`:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/organisms/HeroSection src/components/organisms/ApplicationForm src/components/organisms/TestimonialGrid
git commit -m "feat: add HeroSection, ApplicationForm, and TestimonialGrid organisms"
```

---

### Task 8: Pages — all 5 pages with content

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/o-programu/page.tsx`
- Create: `src/app/dilo-z-dilu/page.tsx`
- Create: `src/app/dilo-z-dilu/page.module.css`
- Create: `src/app/ohlasy/page.tsx`
- Create: `src/app/nezavazna-prihlaska/page.tsx`

- [ ] **Step 1: Create Homepage**

`src/app/page.tsx`:

```tsx
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
```

- [ ] **Step 2: Create O programu page**

`src/app/o-programu/page.tsx`:

```tsx
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
```

- [ ] **Step 3: Create Dílo z dílů page**

`src/app/dilo-z-dilu/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { ContactInfo } from "@/components/molecules/ContactInfo/ContactInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dílo z dílů",
  description:
    "Umělecké dílo inspirované kinetickým uměním Alexandra Caldera — manifestace energie Future Leader.",
};

export default function DiloZDiluPage() {
  return (
    <article>
      <Heading level={1}>Dílo z dílů</Heading>

      <section className={styles.section}>
        <Heading level={2}>Umělecké dílo</Heading>
        <Text>
          Dílo z dílů je manifestací energie Future Leader a myšlenek nové éry.
          Představuje harmonii polarit, hledání rovnováhy a sílu různorodých
          energií sjednocených v jednom celku.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Koncept</Heading>
        <Text>
          Dílo čerpá inspiraci z kinetického umění — mobilů Alexandra Caldera.
          Umělecká díla, jejichž jednotlivé části se pohybují prouděním vzduchu
          nebo dotykem a přinášejí radost a energii do prostoru.
        </Text>
        <Text>
          Rovnováha pohybu s uzemněním. Dokonalost vedle syrovosti. Jemnost
          vyvážená silou. Tok v protikladu s ukotvením. Země a vzduch. Náhoda
          potkávající přesnost.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Příběh</Heading>
        <Text>
          Absolventi i lektoři programu přispěli svými díly. Vývoj trval
          přibližně rok, s opakovaným zdokonalováním, dokud skupina nepocítila,
          že finální podoba je autentická. Každé dílo je unikátní a bude se
          vyvíjet v čase — zrcadlí lidskou proměnu a proměnu světa.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>O autorce</Heading>
        <Text>
          Anna Štěpánková pracuje na pomezí snového umění a funkčního
          produktového designu. Mezi její práce patří výlohy pro Hermès,
          pražské instalace ESKU a scenografie pro Czech Grand Design.
        </Text>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Kontakt</Heading>
        <ContactInfo
          name="Ivana Sládková"
          email="info@futureleader.cz"
          phone="+420 724 030 480"
        />
      </section>
    </article>
  );
}
```

`src/app/dilo-z-dilu/page.module.css`:

```css
.section {
  margin-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
```

- [ ] **Step 4: Create Ohlasy page**

`src/app/ohlasy/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Text } from "@/components/atoms/Text/Text";
import { TestimonialGrid } from "@/components/organisms/TestimonialGrid/TestimonialGrid";

export const metadata: Metadata = {
  title: "Ohlasy",
  description:
    "Ohlasy absolventů programu Future Leader — zkušenosti z desátého běhu i předchozích ročníků.",
};

const TESTIMONIALS = [
  {
    name: "Nicole Martincová",
    role: "Team Manager, Učitel naživo",
    quote:
      "Jeden z nejbezpečnějších a nejinspirativnějších kolektivů, jehož jsem byla součástí. Dopad byl cítit od prvního dne.",
  },
  {
    name: "Martin Bak",
    role: "Group Leader, Heureka Group",
    quote:
      "Zbavil jsem se nepomáhajících ideálů a naučil se novým perspektivám na sebe sama díky různým nástrojům a technikám.",
  },
  {
    name: "Zuzana Kuberová",
    role: "Výkonná ředitelka, Reuse Federation",
    quote:
      "Program se zaměřuje na sebeobjevování, ne na sebezdokonalování. Prozkoumali jsme hluboká systémová témata.",
  },
  {
    name: "Jiří Tatíček",
    role: "Nákupčí, RACOM",
    quote:
      "Zážitek je nepopsatelný. Bezpečný prostor a soudržná skupinová dynamika mě zcela pohltily.",
  },
  {
    name: "Lucie Deptová",
    role: "Producentka / Analytička",
    quote:
      "Celoroční cesta se zážitkovými aktivitami včetně pohybové meditace, tance a konstelační práce.",
  },
  {
    name: "Magdalena Hubená",
    role: "Projektová manažerka",
    quote:
      "Z každého víkendu jsem si odnesla konkrétní vhledy a ocenila podporující komunitu.",
  },
];

export default function OhlasyPage() {
  return (
    <>
      <Heading level={1}>Ohlasy</Heading>
      <Text size="lg" weight="extralight">
        Co říkají absolventi 10. běhu programu Future Leader.
      </Text>
      <TestimonialGrid testimonials={TESTIMONIALS} />

      <section style={{ marginTop: "var(--spacing-xl)" }}>
        <Heading level={2}>Historie programu</Heading>
        <Text>
          Program Future Leader byl založen v roce 2012 třemi ženami — Tamarou
          Kováčovou, Silvií Pýchovou a Ivanou Sládkovou — ve spolupráci se
          Zdeňkem Štěpánkem. Byl navržen pro rozvoj navigačních dovedností
          lídrů a budování meziodvětvových sítí.
        </Text>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Create Přihláška page**

`src/app/nezavazna-prihlaska/page.tsx`:

```tsx
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
```

- [ ] **Step 6: Verify build and all routes**

Run:
```bash
npm run build
```

Expected: Build succeeds, generates static HTML for all 5 routes: `/`, `/o-programu`, `/dilo-z-dilu`, `/ohlasy`, `/nezavazna-prihlaska`.

- [ ] **Step 7: Commit**

```bash
git add src/app/
git commit -m "feat: add all 5 pages with content and metadata"
```

---

### Task 9: SEO — sitemap and robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create sitemap.ts**

`src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.futureleader.cz";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/o-programu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/dilo-z-dilu`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/ohlasy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/nezavazna-prihlaska`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
  ];
}
```

- [ ] **Step 2: Create robots.ts**

`src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.futureleader.cz/sitemap.xml",
  };
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds. Check that `out/sitemap.xml` and `out/robots.txt` exist.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt for SEO"
```

---

### Task 10: Final verification

- [ ] **Step 1: Full build**

Run:
```bash
npm run build
```

Expected: Static export to `out/` directory with all pages as HTML files.

- [ ] **Step 2: Verify all routes in dev**

Run: `npm run dev`

Check each route in browser:
- `http://localhost:3000` — Hero section, navigation, footer
- `http://localhost:3000/o-programu` — Placeholder content
- `http://localhost:3000/dilo-z-dilu` — Full content about the artwork
- `http://localhost:3000/ohlasy` — Testimonial cards in grid
- `http://localhost:3000/nezavazna-prihlaska` — Form with client-side submission

- [ ] **Step 3: Verify navigation works**

Click through all nav links, confirm active state highlights current page.

- [ ] **Step 4: Verify font loads**

Inspect body/headings in devtools — font-family should be Poppins.
