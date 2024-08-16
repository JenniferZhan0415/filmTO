"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import LikeButton from "../../components/like-button";
import type { Article } from "@/types/article";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function App() {
  const { data: articles } = useSWR<Article[]>("/api/articles", fetcher);

  const articleCards = articles?.filter(
    (article) => article.type === "article"
  );

  const eventCards = articles?.filter((article) => article.type === "event");

  const screeningCards = articles?.filter(
    (article) => article.type === "screening"
  );
  // console.log(screeningCards);

  const articleCardComponent = (articleCard: Article) => (
    <Card key={articleCard.id} className="col-span-12 sm:col-span-4  h-[300px]">
      <CardHeader className="absolute z-10 pt-4 flex-col !items-start ">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">
              {articleCard.subtitle}
            </p>
            <Link
              isExternal
              href={articleCard.url!}
              underline="hover"
              showAnchorIcon
              className="text-white font-medium text-large mt-1"
            >
              {articleCard.title}
            </Link>
          </div>
          <LikeButton type="article" id={articleCard.id} />
        </div>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="TIFF 2024 Poster"
        className="z-0 w-full h-full object-cover"
        src={articleCard.image!}
      />
    </Card>
  );

  const eventCardComponent = (eventCard: Article) => (
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
              href={eventCard.url!}
              underline="hover"
              showAnchorIcon
              className="text-white font-medium text-large mt-1"
            >
              {eventCard.title}
            </Link>
          </div>
          <LikeButton type="article" id={eventCard.id} />
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
          onClick={() => window.open("https://mulanfestival.com", "_blank")}
          className="text-tiny"
          color="primary"
          radius="full"
          size="sm"
        >
          Visit Website
        </Button>
      </CardFooter>
    </Card>
  );

  const screeningCardComponent = (screeningCard: Article) => (
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
              href={screeningCard.url!}
              underline="hover"
              showAnchorIcon
              className="text-white font-medium text-large mt-1"
            >
              {screeningCard.title}
            </Link>
          </div>
          <LikeButton type="article" id={screeningCard.id} />
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
          radius="full"
          size="sm"
          color="primary"
          onClick={() =>
            window.open(
              "https://revuecinema.ca/films/revue-event-july-rhapsody-2002-new-4k-restoration/",
              "_blank"
            )
          }
        >
          Get Tickets
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {articleCards?.map((articleCard) => articleCardComponent(articleCard))}
      {eventCards?.map((eventCard) => eventCardComponent(eventCard))}
      {screeningCards?.map((screeningCard) =>
        screeningCardComponent(screeningCard)
      )}
    </div>
  );
}
