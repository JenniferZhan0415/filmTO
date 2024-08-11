import type { DFilm } from "@/types/film";

import { Button } from "@nextui-org/button";
import { Divider, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { ArrowLeft } from "../icons";
import { subtitle } from "../primitives";

import { getFilmById } from "@/actions/film";

const DetailHeader = ({ title }: { title: string }): JSX.Element => {
  return <h4 className="font-bold mt-2">{title}</h4>;
};

const FilmDetails = ({
  film,
  hide,
}: {
  film: DFilm | null;
  hide: () => void;
}): JSX.Element => {
  const [details, setDetails] = useState<DFilm | null>(null);

  useEffect(() => {
    (async () => {
      if (!film?.id) return;
      const res = await getFilmById(film.id);
      const { id, title, genres, overview: plot, poster_path: poster } = res;

      setDetails({ ...film, plot });
    })();
  }, [film]);

  return (
    <div className="relative flex flex-col">
      <Button
        isIconOnly
        aria-label="Expand"
        className="absolute left-0"
        color="primary"
        variant="light"
        // onClick={hide}
      >
        <ArrowLeft height={30} width={30} />
      </Button>
      <h4 className={`${subtitle()} mt-1`}>Details</h4>

      <Divider className="mb-4" />

      <div className="text-left flex flex-col">
        <DetailHeader title="Plot" />
        <Skeleton className="w-full min-h-52" isLoaded={details?.plot}>
          <p className="leading-4 text-sm">{film?.plot || details?.plot}</p>
        </Skeleton>
        {film?.reason && (
          <>
            <DetailHeader title="Why is it recommended" />
            <p className="text-justify">{film?.reason}</p>
          </>
        )}
      </div>

      <div className="w-full flex justify-center mt-5">
        <Button className="w-1/2" color="primary" size="md" variant="shadow">
          Select
        </Button>
      </div>
    </div>
  );
};

export default FilmDetails;
