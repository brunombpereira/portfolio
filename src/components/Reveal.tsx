"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Delay in ms before the fade-up kicks in. Stagger siblings with 80–120ms. */
  delay?: number;
  className?: string;
  /** Tag to render. Defaults to a div but accepts section/article/etc. */
  as?: "div" | "section" | "article" | "header" | "footer";
}

/**
 * Fade-up children when they enter the viewport. Pure IntersectionObserver +
 * CSS transition — no framer-motion dep. Triggers once per element and
 * respects `prefers-reduced-motion` (CSS resets opacity to 1 immediately).
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (delay > 0) {
              window.setTimeout(
                () => target.setAttribute("data-revealed", "true"),
                delay,
              );
            } else {
              target.setAttribute("data-revealed", "true");
            }
            io.unobserve(target);
          }
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error — dynamic tag, ref + className still typed correctly
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
