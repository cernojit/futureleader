"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import styles from "./Navigation.module.css";
import { Button } from "@/components/atoms/Button/Button";

const NAV_ITEMS = [
  { href: "/", label: "Úvod" },
  { href: "/o-programu", label: "O programu" },
  { href: "/dilo-z-dilu", label: "Dílo z dílů" },
  { href: "/ohlasy", label: "Ohlasy" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Hlavní navigace">
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
        <li key="/nezavazna-prihlaska">
            <Button variant="secondary" href="/nezavazna-prihlaska" active={pathname === "/nezavazna-prihlaska"}>Toto mě volá</Button>
        </li>
      </ul>
    </nav>
  );
}
