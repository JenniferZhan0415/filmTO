"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import FestivalCard from "./festivalcard";
import FestivalCalender from "./festivalcalender";

export default function Festival() {
  return (
    <section className="mt-6 w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: "blue" })} pb-4`}>
            Year-round Film Festivals
          </h1>
          <FestivalCalender />
          <FestivalCard />
        </CardBody>
      </Card>
    </section>
  );
}
