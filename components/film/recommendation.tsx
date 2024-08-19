"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { title, Color } from "@/components/primitives";
import Films from "@/components/film/films";

export default function FilmRecommendation() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <h1 className={`${title({ color: theme as Color })}`}>
        Film Recommendations
      </h1>
      <Films />
    </>
  );
}
