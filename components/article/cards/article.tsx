"use client";

import type { Article } from "@/types/article";

import React from "react";
import { Card, CardHeader, Image, Link } from "@nextui-org/react";

import LikeButton from "@/components/like-button";

const ArticleCardComponent = ({ articleCard }: { articleCard: Article }) => (
  <Card className="col-span-12 sm:col-span-4  h-[300px]">
    <CardHeader className="absolute z-10 pt-4 flex-col !items-start ">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-tiny text-white/60 uppercase font-bold">
            {articleCard.subtitle}
          </p>
          <Link
            isExternal
            showAnchorIcon
            className="text-white font-medium text-large mt-1"
            href={articleCard.url!}
            underline="hover"
          >
            {articleCard.title}
          </Link>
        </div>
        <LikeButton id={articleCard.id} type="article" />
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

export default ArticleCardComponent;
