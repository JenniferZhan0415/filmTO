"use client";

import React from "react";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

import LikeButton from "../../components/like-button";

import FestivalImage from "./festival-image";

import Festival from "@/types/festival";

interface FestivalCardProps {
  festivals: Festival[];
}

export default function FestivalCard({ festivals }: FestivalCardProps) {
  return (
    <div className="flex flex-wrap gap-10 justify-center w-full">
      {festivals?.map((item: Festival) => (
        <Card key={item.id} shadow="sm">
          <CardBody className="overflow-visible p-0 max-w-60 min-h-64">
            <FestivalImage image={item.image!} />
          </CardBody>
          <CardFooter className="text-small justify-between ">
            <Link
              isExternal
              className="max-w-36 text-medium font-medium"
              href={item.website!}
              underline="hover"
            >
              {item.name}
            </Link>
            <LikeButton id={item.id} type="festival" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
