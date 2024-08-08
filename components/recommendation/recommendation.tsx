"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import FilmCard from "./film-card";

export default function Recommendation() {
  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: "blue" })} pb-4`}>
            Film Recommendations
          </h1>
          <h4 className="text-default-500 mb-8">
            Choose your favorite film from TIFF People's Choice Award
          </h4>
          <FilmCard />
        </CardBody>
      </Card>
    </section>
  );
}
