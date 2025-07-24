"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useNav() {
  const router = useRouter();

  useEffect(() => {
    const projects = document.getElementById("Projects");
    const home = document.getElementById("Home");

    if (!projects || !home) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    let lastVisible = ""; // чтобы не вызывать повторно scroll и pushState

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && lastVisible !== "Projects") {
          projects.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", "#Projects");
          lastVisible = "Projects";
        } else if (!entry.isIntersecting && lastVisible !== "Home") {
          home.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", "#Home");
          lastVisible = "Home";
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(projects);

    return () => observer.disconnect();
  }, []);
}
