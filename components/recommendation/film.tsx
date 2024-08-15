"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { map } from "lodash";

import FilmDetails from "./film-details";

import { DFilm } from "@/types/film";
import { getFilmByTitle } from "@/actions/film";

/**
 * User film selections.
 *
 * @param {IFilm} film - current film
 * @param {Function} displayDescription - render
 *  more details about the current film
 */
interface IProps {
  displayDescription: (film: DFilm) => void;
  film: DFilm;
  hideDescription: () => void;
  generateRecos: (film: DFilm) => void;
  loaded: boolean;
}

/**
 * Component for film selections.
 *
 */
const Film: React.FC<IProps> = ({
  film,
  displayDescription,
  hideDescription,
  generateRecos,
  loaded,
}): JSX.Element => {
  const [details, setDetails] = useState<DFilm | null>(null);

  useEffect(() => {
    details ||
      (async () => {
        if (!film?.title || !film?.year) return;
        const res = await getFilmByTitle(film.title, film.year);

        if (!res.results.length) return;

        const {
          id,
          title,
          genres,
          overview: plot,
          poster_path: poster,
        } = res.results[0];

        setDetails({
          ...film,
          id,
          title,
          genres: map(genres, "name"),
          plot,
          poster: "https://image.tmdb.org/t/p/w500" + poster,
        });
      })();
  }, []);

  const handleSelect = (selected: IFilm | null) => {
    if (selected) {
      displayDescription({ ...selected, type: "description" });
    }
  };

  const description = (
    <FilmDetails
      film={details}
      generate={generateRecos}
      hide={hideDescription}
    />
  );

  const cover = (
    <Card
      isPressable={film?.type !== "description"}
      onPress={() => handleSelect(film)}
    >
      {/*title*/}
      <CardHeader className="pb-0 pt-2 px-4 flex-col gap-1 items-start text-left">
        <Skeleton className="rounded-lg w-full" isLoaded={loaded}>
          <h4 className="font-bold line-clamp-2 h-12 text-primary">
            {film?.title}
          </h4>
        </Skeleton>
        <Skeleton className="rounded-lg w-1/3" isLoaded={loaded}>
          <h4>{details?.year}</h4>
        </Skeleton>
        <Skeleton className="rounded-lg w-3/4" isLoaded={loaded}>
          <p className="line-clamp-1">By {details?.director}</p>
        </Skeleton>
      </CardHeader>

      {/*poster*/}
      <CardBody className="overflow-hidden rounded-xl p-0 pt-4">
        <Skeleton className="rounded-xl" isLoaded={details?.poster && loaded}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            height={300}
            src={details?.poster}
            width={270}
          />
        </Skeleton>
      </CardBody>
    </Card>
  );

  return (
    <div className="py-4 w-[240px]">
      {film?.type === "description" ? description : cover}
    </div>
  );
};

export default Film;
