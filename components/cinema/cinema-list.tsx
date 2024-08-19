"use client";

import React, { useEffect, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

import { ListboxWrapper } from "./listbox-wrapper";

import { getAllCinemas } from "@/actions/cinema";
import FormattedCinema from "@/types/cinema";

type CinemaListProps = {
  handleOpenCinemaCard: (key: string) => void;
};

const CinemaList: React.FC<CinemaListProps> = ({
  handleOpenCinemaCard,
}): JSX.Element => {
  const [cinemas, setCinemas] = useState<FormattedCinema[]>([]);

  useEffect(() => {
    (async () => {
      const allCinemas = await getAllCinemas();

      setCinemas(allCinemas);
    })();
  }, []);

  return (
    <div className="flex flex-row gap-4 w-full h-full sm:w-2/5 items-center">
      <ListboxWrapper>
        <Listbox
          aria-label="Listbox Variants"
          className="h-full flex flex-col justify-center overflow-hidden"
          color="primary"
          variant="flat"
        >
          {cinemas.map((cinema) => (
            <ListboxItem
              key={cinema.key}
              className="h-[1.875rem] flex flex-col items-start justify-center"
              onClick={() => {
                handleOpenCinemaCard(cinema.key);
              }}
            >
              {cinema.key}
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
    </div>
  );
};

export default CinemaList;
