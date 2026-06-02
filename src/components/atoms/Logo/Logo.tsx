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
