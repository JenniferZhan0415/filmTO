"use client";

import type { Article } from "@/types/article";

import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

import LikeButton from "@/components/like-button";

const ScreeningCardComponent = ({
  screeningCard,
}: {
  screeningCard: Article;
}) => (
  <Card
    key={screeningCard.id}
    isFooterBlurred
    className="w-full h-[300px] col-span-12 sm:col-span-7"
  >
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-tiny text-white/60 uppercase font-bold">
            {screeningCard.subtitle}
          </p>
          <Link
            isExternal
            showAnchorIcon
            className="text-white font-medium text-large mt-1"
            href={screeningCard.url!}
            underline="hover"
          >
            {screeningCard.title}
          </Link>
        </div>
        <LikeButton id={screeningCard.id} type="article" />
      </div>
    </CardHeader>
    <Image
      isZoomed
      removeWrapper
      alt="Relaxing app background"
      className="z-0 w-full h-full object-cover"
      src={screeningCard.image!}
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
        <div className="flex flex-col">
          <p className="text-tiny text-white/60">@Revue Cinema</p>
          <p className="text-tiny text-white/60">Mon Sep 09, 09:30 PM</p>
        </div>
      </div>
      <Button
        color="primary"
        radius="full"
        size="sm"
        onClick={() =>
          window.open(
            "https://revuecinema.ca/films/revue-event-july-rhapsody-2002-new-4k-restoration/",
            "_blank",
          )
        }
      >
        Get Tickets
      </Button>
    </CardFooter>
  </Card>
);

export default ScreeningCardComponent;
