"use client";

import { useEffect, useState } from "react";
import { findIndex } from "lodash";

import FilmCard from "./film";

import { generate, generatePredefined } from "@/actions/recommend";
import { TMDBFilm, SavedFilm } from "@/types/film";
import { getFilmById } from "@/actions/film";

const Recommendations = (): JSX.Element => {
  // display films
  const [films, setFilms] = useState<TMDBFilm[]>([]);
  // selected films
  const [selected, setSelected] = useState<TMDBFilm[]>([]);
  const [recommended, setRecommended] = useState<string[]>([]);

  const [loaded, setLoaded] = useState(false);

  // on mount
  useEffect(() => {
    (async () => {
      // get predefined films
      const defaults = await generatePredefined();
      const tmdbFilms = await Promise.all(
        defaults.map((film: SavedFilm) => getFilmById(film.tmdbId)),
      );
      const defaultFilms = defaults.map(
        (savedFilm: SavedFilm, index: number): TMDBFilm =>
          ({
            ...savedFilm,
            id: savedFilm.tmdbId,
            plot: tmdbFilms[index].overview,
            poster: tmdbFilms[index].poster_path,
            genres: tmdbFilms[index].genres.map((genre: any) => genre.name),
            year: Number(savedFilm.year),
            type: "cover",
          }) as TMDBFilm,
      );

      setFilms(defaultFilms);
    })();
  }, []);

  useEffect(() => {
    if (films.length) setLoaded(true);
  }, [films]);

  // generate recommendations
  const generateRecos = async (film?: TMDBFilm) => {
    setLoaded(false);

    let recos;

    if (!film) {
      setSelected([]);
      recos = await generatePredefined();
    } else {
      // history recommendations
      const prevRecos = selected
        .map((f: TMDBFilm) => `${f.title} by ${f.director}`)
        .join(", ");
      const other = prevRecos && `as well as ${prevRecos}`;

      let prompt = `I like the film ${film.title} by ${film.director} ${other}. Could you recommend three more films similar to it? Please give detailed explanation why these films are related.`;

      if (recommended.length)
        prompt += ` Also, please exclude any films in the following list: ${recommended}`;

      recos = await generate(prompt);
      setSelected([...selected, film as TMDBFilm]);
    }

    // append AI recommended films to history
    setRecommended([...recommended, ...recos.map((f) => f.title)]);

    setFilms(recos as TMDBFilm[]);
  };

  /**
   * Display film description card.
   */
  const displayDescription = (film: TMDBFilm) => {
    const covers = hideDescription(false);
    const index = findIndex(covers, (f: TMDBFilm) => f?.title === film.title);

    setFilms([...covers.slice(0, index + 1), film, ...covers.slice(index + 1)]);
  };

  /**
   * Hide film description card.
   */
  const hideDescription = (set: boolean = true) => {
    const covers = films.filter((f: TMDBFilm) => f?.type !== "description");

    if (set) setFilms(covers);

    return covers;
  };

  const headline =
    selected.length > 0 ? (
      <p>
        You&apos;ve chosen
        <span className="font-semibold text-primary px-1">
          {selected.map((f: TMDBFilm) => f.title).join(" and ")}
        </span>
        as your favorite film(s).
      </p>
    ) : (
      <p>
        Pick your facorite films from this list of <br /> TIFF People&apos;s
        Choice Awards
      </p>
    );

  return (
    <>
      <h2 className="text-default-500">{headline}</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {films.map((film: TMDBFilm) => (
          <FilmCard
            key={`${film.title}-${film.type}`}
            displayDescription={displayDescription}
            film={film}
            generateRecos={generateRecos}
            hideDescription={hideDescription}
            loaded={loaded}
            selected={selected}
          />
        ))}
      </div>
    </>
  );
};

export default Recommendations;
