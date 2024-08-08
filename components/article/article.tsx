"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import ArticleList from "./article-list";

export default function Article() {
  return (
    <section className="mt-6 w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: "blue" })} pb-4`}>
            Film Events and Reviews
          </h1>
          <ArticleList />
        </CardBody>
      </Card>
    </section>
  );
}
