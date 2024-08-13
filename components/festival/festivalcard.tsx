"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import FestivalImage from "./festival-image";
import LikeButton from "./like-button";
import Festival from "@/types/festival";

interface FestivalCardProps {
  festivals: Festival[];
}

export default function FestivalCard({ festivals }: FestivalCardProps) {
  return (
    <div className="flex flex-wrap gap-10 justify-center w-full">
      {festivals?.map((item: Festival) => (
        <Card
          shadow="sm"
          key={item.id}
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 max-w-60 min-h-64">
            <FestivalImage image={item.image!} />
          </CardBody>
          <CardFooter className="text-small justify-between ">
            <Link
              isExternal
              href={item.website!}
              underline="hover"
              className="max-w-36 text-medium font-medium"
            >
              {item.name}
            </Link>
            <LikeButton />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
