import { useEffect, useState } from "react";

export default function useHasScrolled() {
  const [scrolledOptions, setScrolledOpts] = useState<TScrolledOpts>(null);

  let prev = typeof window !== "undefined" ? window.scrollY : 0;

  const handleScroll = (e?: any) => {
    const curr = e ? e.currentTarget.scrollY : window.scrollY;

    if (curr > prev) setScrolledOpts({ direction: "up", y: curr });
    else setScrolledOpts({ direction: "down", y: curr });

    return window.scrollY;
  };

  useEffect(() => {
    handleScroll();

    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);

      return () => removeEventListener("scroll", handleScroll);
    }
  }, []);

  return scrolledOptions;
}

type TScrolledOpts = { direction: "up" | "down"; y: number } | null;
