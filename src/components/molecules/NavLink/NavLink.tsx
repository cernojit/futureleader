"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
};

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${styles.link} ${isActive ? styles.active : ""}`} onClick={onClick}>
      {children}
    </Link>
  );
}
