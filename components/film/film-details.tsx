import type { DFilm } from "@/types/film";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import { ArrowLeft } from "../icons";
import { subtitle } from "../primitives";

const DetailHeader = ({ title }: { title: string }): JSX.Element => {
  return <h4 className="font-bold mt-2 text-md">{title}</h4>;
};

const FilmDetails = ({
  film,
  hide,
  generate,
}: {
  film: DFilm | null;
  hide: () => void;
  generate: (film: DFilm) => void;
}): JSX.Element => {
  return (
    <div className="relative flex flex-col">
      <Button
        isIconOnly
        aria-label="Expand"
        className="absolute left-0"
        color="primary"
        variant="light"
        onClick={hide}
      >
        <ArrowLeft height={30} width={30} />
      </Button>
      <h4 className={`${subtitle()} mt-1`}>Details</h4>

      <Divider className="mb-4" />

      <div className="text-left flex flex-col leading-4 text-sm">
        <DetailHeader title="Plot" />
        <p>{film?.plot || film?.plot}</p>
        {film?.reason && (
          <>
            <DetailHeader title="Why is it recommended" />
            <p>{film?.reason.replace(/\\"/g, '"')}</p>
          </>
        )}
      </div>

      <div className="w-full flex justify-center mt-5">
        <Button
          className="w-1/2"
          color="primary"
          size="md"
          variant="shadow"
          onClick={() => film && generate(film)}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default FilmDetails;
