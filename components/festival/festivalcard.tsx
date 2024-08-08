"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import FestivalImage from "./festival-image";
import LikeButton from "./like-button";

export default function FestivalCard() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
  ];

  return (
    <div className="flex gap-10 justify-center w-full">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[160px]"
              src={item.img}
            /> */}
            <FestivalImage />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <span>
              <LikeButton />
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
