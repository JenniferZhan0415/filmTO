"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import ArticleList from "./article-list";
import ArticleCart from "./article-card";
import LikeButton from "./like-button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Article() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: theme })} pb-4`}>
            Film Events and Reviews
          </h1>
          <h4 className="text-default-500 mb-8">
            Click star to save the article to your dashboard
          </h4>
          {/* <ArticleList /> */}
          <ArticleCart />
        </CardBody>
      </Card>
    </section>
  );
}
