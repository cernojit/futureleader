"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import styles from "./Navigation.module.css";
import { Button } from "@/components/atoms/Button/Button";

const NAV_ITEMS = [
  { href: "/", label: "Úvod" },
  { href: "/o-programu", label: "O programu" },
  { href: "/komunita", label: "Komunita" },
  { href: "/nas-tym", label: "Náš tým" },
  { href: "/dilo-z-dilu", label: "Dílo z dílů" },
  { href: "/ohlasy", label: "Reference" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.nav} aria-label="Hlavní navigace">
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="main-navigation-list"
        aria-label={isOpen ? "Zavřít navigaci" : "Otevřít navigaci"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.toggleLine} />
        <span className={styles.toggleLine} />
        <span className={styles.toggleLine} />
      </button>
      <ul id="main-navigation-list" className={`${styles.list} ${isOpen ? styles.listOpen : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} onClick={() => setIsOpen(false)}>{item.label}</NavLink>
          </li>
        ))}
        <li key="/nezavazna-prihlaska">
          <Button variant="secondary" href="/nezavazna-prihlaska" active={pathname === "/nezavazna-prihlaska"} onClick={() => setIsOpen(false)}>Toto mě volá</Button>
        </li>
      </ul>
    </nav>
  );
}
