"use client";

import { ComponentProps, useEffect, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./listbox-wrapper";
import { getAllCinemas } from "@/actions/cinema";
import FormattedCinema from "@/types/cinema";

export default function CinemaList() {
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

  return (
    <div className="flex flex-row gap-4 w-full sm:w-2/5">
      <ListboxWrapper>
        <Listbox
          aria-label="Listbox Variants"
          color={selectedColor}
          variant={selectedVariant}
        >
          {cinemas.map((cinema) => (
            <ListboxItem key={cinema.key}>{cinema.key}</ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
    </div>
  );
}
