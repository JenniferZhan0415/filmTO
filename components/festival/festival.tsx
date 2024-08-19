"use client";
import type { Festival } from "@/types/festival";

import { Card, CardBody } from "@nextui-org/react";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useTheme } from "next-themes";

import FestivalCard from "./festivalcard";
import FestivalCalender from "./festivalcalender";

import { title, Color } from "@/components/primitives";
import { getFestivalsByMonth } from "@/actions/festival";
import fetcher from "@/utils/fetcher";

export default function Festival() {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const { data: defaultFestivals } = useSWR<Festival[]>("/api/festivals", {
    fetcher,
  });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
          <h1
            className={`${title({ color: theme as Color })} pb-4 text-center`}
          >
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
