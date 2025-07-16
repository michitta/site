"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useNav() {
  const router = useRouter();

  useEffect(() => {
    // const home = document.getElementById("FirstSection");
    const projects = document.getElementById("Projects");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
      scrollMargin: `10px`,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        router.push(entry.isIntersecting ? "#Projects" : "#Home");
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(projects!);

    return () => observer.disconnect();
  }, []);
}
