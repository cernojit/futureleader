"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogoSymbol } from "@/components/atoms/Logo/LogoSymbol";

type HeartbeatSignupLogoProps = {
  readonly className?: string;
};

const CYCLE_MS = 2400;

export function HeartbeatSignupLogo({ className }: HeartbeatSignupLogoProps) {
  const [hovered, setHovered] = useState(false);
  const [hoverPinned, setHoverPinned] = useState(false);
  const timeoutIdsRef = useRef<ReturnType<typeof globalThis.setTimeout>[]>([]);

  useEffect(() => {
    const clearBeatTimeouts = () => {
      timeoutIdsRef.current.forEach((id) => globalThis.clearTimeout(id));
      timeoutIdsRef.current = [];
    };

    if (hoverPinned) {
      clearBeatTimeouts();
      setHovered(true);
      return;
    }

    const reduceMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setHovered(false);
      return;
    }

    const runBeat = () => {
      clearBeatTimeouts();
      setHovered(true);
      const timeoutIds = [
        globalThis.setTimeout(() => setHovered(false), 180),
        globalThis.setTimeout(() => setHovered(true), 360),
        globalThis.setTimeout(() => setHovered(false), 560),
      ];
      timeoutIdsRef.current.push(...timeoutIds);
    };

    runBeat();
    const intervalId = globalThis.setInterval(runBeat, CYCLE_MS);

    return () => {
      globalThis.clearInterval(intervalId);
      clearBeatTimeouts();
    };
  }, [hoverPinned]);

  return (
    <Link
      href="/nezavazna-prihlaska"
      className={className}
      aria-label="Přejít na nezávaznou přihlášku"
      onMouseEnter={() => setHoverPinned(true)}
      onMouseLeave={() => setHoverPinned(false)}
    >
      <LogoSymbol hovered={hovered} color="currentColor" />
    </Link>
  );
}