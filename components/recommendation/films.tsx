"use client";

import { useEffect, useState } from "react";
import { findIndex } from "lodash";

import FilmCard from "./film";

import { generate, generatePredefined } from "@/actions/recommend";
import { DFilm } from "@/types/film";

const Recommendations = (): JSX.Element => {
  // display films
  const [films, setFilms] = useState<DFilm[]>([]);
  // selected films
  const [selected, setSelected] = useState<DFilm[]>([]);
  const [loaded, setLoaded] = useState(false);

  // on mount
  useEffect(() => {
    (async () => {
      // get predefined films
      const defaults = await generatePredefined();

      setFilms(defaults);
    })();
  }, []);

  useEffect(() => {
    if (films.length) setLoaded(true);
  }, [films]);

  // generate recommendations
  const generateRecos = async (film: DFilm) => {
    if (selected.length >= 2) return;
    setLoaded(false);

    // history recommendations
    const prevRecos = selected
      .map((f: DFilm) => `${f.title} by ${film.director}`)
      .join(", ");
    const other = prevRecos && `as well as ${prevRecos}`;

    const recos = await generate(
      `I like the film ${film.title} by ${film.director} ${other}. Could you recommend three more films similar to it? Please give detailed explanation why these films are related.`,
    );

    setSelected([...selected, film]);
    setFilms(recos);
  };

  /**
   * Display film description card.
   */
  const displayDescription = (film: DFilm) => {
    const covers = hideDescription(false);
    const index = findIndex(
      covers,
      (f: DFilm | null) => f?.title === film.title,
    );

    setFilms([...covers.slice(0, index + 1), film, ...covers.slice(index + 1)]);
  };

  /**
   * Hide film description card.
   */
  const hideDescription = (set: boolean = true) => {
    const covers = films.filter((f: DFilm | null) => f?.type !== "description");

    if (set) setFilms(covers);

    return covers;
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {films.map((film: DFilm) => (
        <FilmCard
          key={`${film.title}-${film.type}`}
          displayDescription={displayDescription}
          film={film}
          generateRecos={generateRecos}
          hideDescription={hideDescription}
          loaded={loaded}
        />
      ))}
    </div>
  );
};

export default Recommendations;
