"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image, Skeleton } from "@nextui-org/react";
import LikeButton from "../../components/like-button";
import FilmDetails from "./film-details";
import { DFilm } from "@/types/film";

/**
 * User film selections.
 *
 * @param {IFilm} film - current film
 * @param {Function} displayDescription - render
 *  more details about the current film
 */
interface IProps {
  displayDescription: (film: IFilm, index: number) => void;
  film: DFilm | null;
  index: number;
  hideDescription: () => void;
}

/**
 * Component for film selections.
 *
 */
const Film: React.FC<IProps> = ({
  film,
  index,
  displayDescription,
  hideDescription,
}): JSX.Element => {
  const handleSelect = (selected: IFilm | null) => {
    if (selected) {
      hideDescription();
      displayDescription({ ...selected, type: "description" }, index);
    }
  };

  const loaded: boolean = !!film;

  const description = <FilmDetails film={film} hide={hideDescription} />;

  const cover = (
    <Card>
      {/*title*/}
      <CardHeader className="pb-0 pt-2 px-4 flex-col gap-1 items-start text-left">
        <Skeleton className="rounded-lg w-full" isLoaded={loaded}>
          <div className="flex items-center justify-between">
            <h4 className="font-bold line-clamp-2 text-primary">
              {film?.title}
            </h4>
            <LikeButton type="film" id={film?.tmdbId} />
          </div>
        </Skeleton>
        <Skeleton className="rounded-lg w-1/3" isLoaded={loaded}>
          <h4>{film?.year}</h4>
        </Skeleton>
        <Skeleton className="rounded-lg w-3/4" isLoaded={loaded}>
          <p className="line-clamp-1">By {film?.director}</p>
        </Skeleton>
      </CardHeader>

      {/*poster*/}
      <Card
        className="mt-2"
        isPressable={film?.type !== "description"}
        onPress={() => handleSelect(film)}
      >
        <CardBody className="overflow-hidden rounded-xl p-0">
          <Skeleton className="rounded-xl" isLoaded={loaded}>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src={film?.poster}
              width={270}
            />
          </Skeleton>
        </CardBody>
      </Card>
    </Card>
  );

  return (
    <div key={`${film?.title} ${index}`} className="py-4 basis-60">
      {film?.type === "description" ? description : cover}
    </div>
  );
};

export default Film;
