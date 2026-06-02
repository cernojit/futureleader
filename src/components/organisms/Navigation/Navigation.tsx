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
