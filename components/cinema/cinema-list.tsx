"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./listbox-wrapper";
import { getAllCinemas } from "@/actions/cinema";
import FormattedCinema from "@/types/cinema";

type CinemaListProps = {
  handleOpenCinemaCard: (key: string) => {};
};

const CinemaList: React.FC<CinemaListProps> = ({
  handleOpenCinemaCard,
}): JSX.Element => {
  type ListboxProps = ComponentProps<typeof Listbox>;
  const [selectedVariant, setSelectedVariant] =
    useState<ListboxProps["variant"]>("flat");
  const [selectedColor, setSelectedColor] =
    useState<ListboxProps["color"]>("primary");

  const [cinemas, setCinemas] = useState<FormattedCinema[]>([]);
  useEffect(() => {
    (async () => {
      const allCinemas = await getAllCinemas();
      setCinemas(allCinemas);
    })();
  }, []);

  const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"];
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const iconClasses =
    "display-line text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="flex flex-row gap-4 w-full h-full sm:w-2/5 items-center">
      <ListboxWrapper>
        <Listbox
          className="h-full flex flex-col justify-center"
          aria-label="Listbox Variants"
          color={selectedColor}
          variant={selectedVariant}
        >
          {cinemas.map((cinema) => (
            <ListboxItem
              onClick={() => handleOpenCinemaCard(cinema.key)}
              className="h-7 flex flex-col items-start justify-center"
              key={cinema.key}
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
