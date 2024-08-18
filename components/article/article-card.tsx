"use client";

import type { Article } from "@/types/article";

import React from "react";
import useSWR from "swr";

import Loading from "../loading";

import ArticleCardComponent from "./cards/article";
import EventCardComponent from "./cards/event";
import ScreeningCardComponent from "./cards/screening";

import fetcher from "@/utils/fetcher";

export default function App() {
  const { data: articles } = useSWR<Article[]>("/api/articles", fetcher);

  if (!articles) {
    return <Loading />;
  }

  const articleCards = articles?.filter(
    (article) => article.type === "article"
  );

  const eventCards = articles?.filter((article) => article.type === "event");

  const screeningCards = articles?.filter(
    (article) => article.type === "screening"
  );

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {articleCards?.map((articleCard) => (
        <ArticleCardComponent key={articleCard.id} articleCard={articleCard} />
      ))}
      {eventCards?.map((eventCard) => (
        <EventCardComponent key={eventCard.id} eventCard={eventCard} />
      ))}
      {screeningCards?.map((screeningCard) => (
        <ScreeningCardComponent
          key={screeningCard.id}
          screeningCard={screeningCard}
        />
      ))}
    </div>
  );
}
