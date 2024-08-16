"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { map } from "lodash";

import LikeButton from "../../components/like-button";

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
          poster,
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
    <Card>
      {/*title*/}
      <CardHeader className="pb-0 pt-2 px-4 flex-col gap-1 items-start text-left">
        <Skeleton className="rounded-lg w-full" isLoaded={loaded}>
          <div className="flex items-center justify-between">
            <h4 className="font-bold line-clamp-2 text-primary">
              {film?.title}
            </h4>
            <LikeButton id={film?.tmdbId} type="film" />
          </div>
        </Skeleton>
        <Skeleton className="rounded-lg w-1/3" isLoaded={loaded}>
          <h4>{details?.year}</h4>
        </Skeleton>
        <Skeleton className="rounded-lg w-3/4" isLoaded={loaded}>
          <p className="line-clamp-1">By {details?.director}</p>
        </Skeleton>
      </CardHeader>

      {/*poster*/}
      <Card
        className="mt-2"
        isPressable={film?.type !== "description"}
        onPress={() => handleSelect(film)}
      >
        <CardBody className="overflow-hidden rounded-xl p-0">
          <Skeleton className="rounded-xl" isLoaded={details?.poster && loaded}>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src={"https://image.tmdb.org/t/p/w500" + details?.poster}
              width={270}
            />
          </Skeleton>
        </CardBody>
      </Card>
    </Card>
  );

  return (
    <div className="py-4 w-[240px]">
      {film?.type === "description" ? description : cover}
    </div>
  );
};

export default Film;
