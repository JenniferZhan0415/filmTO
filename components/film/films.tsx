"use client";

import { useEffect, useState } from "react";
import { remove, findIndex } from "lodash";

import FilmCard from "./film";

import { generatePredefined } from "@/actions/recommend";
import { DFilm, SavedFilm } from "@/types/film";
import { getFilmById } from "@/actions/film";

const Recommendations = (): JSX.Element => {
  const [films, setFilms] = useState<DFilm[]>([]);

  // on mount
  useEffect(() => {
    (async () => {
      // get predefined films
      const defaults = await generatePredefined();
      const tmdbFilms = await Promise.all(
        defaults.map((film: SavedFilm) => getFilmById(film.tmdbId))
      );
      const defaultFilms = defaults.map(
        (savedFilm: SavedFilm, index: number): DFilm =>
          ({
            ...savedFilm,
            id: savedFilm.tmdbId,
            plot: tmdbFilms[index].overview,
            poster:
              "https://image.tmdb.org/t/p/w500" + tmdbFilms[index].poster_path,
            type: "cover",
          }) as DFilm
      );

      setFilms(defaultFilms);
    })();
  }, []);

  /**
   * Display film description card.
   */
  const displayDescription = (film: DFilm) => {
    const index = findIndex(
      films,
      (f: DFilm | null) => f?.title === film.title
    );

    setFilms([...films.slice(0, index + 1), film, ...films.slice(index + 1)]);
  };

  /**
   * Hide film description card.
   */
  const hideDescription = () => {
    setFilms(
      remove(films, (film: DFilm | null) => film?.type === "description")
    );
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {films.map((film: DFilm | null, index) => (
        <FilmCard
          key={`${film?.title}-${film?.type}`}
          displayDescription={displayDescription}
          film={film}
          hideDescription={hideDescription}
          index={index}
        />
      ))}
    </div>
  );
};

export default Recommendations;
