"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import FestivalImage from "./festival-image";
import LikeButton from "./like-button";
import { getFestivalsByMonth } from "@/actions/festival";
import Festival from "@/types/festival";

export default function FestivalCard({ festivals }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center w-full">
      {festivals?.map((item: Festival) => (
        <Card
          shadow="sm"
          key={item.id}
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <FestivalImage image={item.image} />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <LikeButton />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
