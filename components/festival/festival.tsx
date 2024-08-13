"use client";
import { Card, CardBody } from "@nextui-org/react";
import { title } from "@/components/primitives";
import FestivalCard from "./festivalcard";
import FestivalCalender from "./festivalcalender";
import type { Festival } from "@/types/festival";
import { useEffect, useState } from "react";
import { getFestivalsByMonth } from "@/actions/festival";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function Festival() {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  const { data: defaultFestivals } = useSWR<Festival[]>("/api/festivals", {
    fetcher,
  });

  const selectMonth = async (month: string) => {
    setFestivals(await getFestivalsByMonth(month));
  };

  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full pb-4"
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center w-full">
          <h1 className={`${title({ color: "blue" })} pb-4 text-center`}>
            Year-round Film Festivals
          </h1>
          <h4 className="text-default-500 mb-6">
            Click to like and save the film festivals to your dashboard
          </h4>
          <FestivalCalender handleClick={selectMonth} />
          <FestivalCard
            festivals={festivals.length ? festivals : defaultFestivals!}
          />
        </CardBody>
      </Card>
    </section>
  );
}
