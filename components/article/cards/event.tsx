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

const EventCardComponent = ({ eventCard }: { eventCard: Article }) => (
  <Card
    key={eventCard.id}
    isFooterBlurred
    className="w-full h-[300px] col-span-12 sm:col-span-5"
  >
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-tiny text-white/60 uppercase font-bold">
            {eventCard.subtitle}
          </p>
          <Link
            isExternal
            showAnchorIcon
            className="text-white font-medium text-large mt-1"
            href={eventCard.url!}
            underline="hover"
          >
            {eventCard.title}
          </Link>
        </div>
        <LikeButton id={eventCard.id} type="article" />
      </div>
    </CardHeader>
    <Image
      isZoomed
      removeWrapper
      alt="Mulan film festival 2024 Poster"
      className="z-0 w-full h-full object-cover"
      src={eventCard.image!}
    />
    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">@Innis Town Hall</p>
        <p className="text-black text-tiny">Aug 9 - Aug 17, 2024</p>
      </div>
      <Button
        className="text-tiny"
        color="primary"
        radius="full"
        size="sm"
        onClick={() => window.open("https://mulanfestival.com", "_blank")}
      >
        Visit Website
      </Button>
    </CardFooter>
  </Card>
);

export default EventCardComponent;
