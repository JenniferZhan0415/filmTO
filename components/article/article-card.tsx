import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import julyRhapsody from "@/assets/article-images/rhapsody.png";
import TIFF24Poster from "@/assets/article-images/tiff24.png";
import mulaniff2024 from "@/assets/article-images/mulan24.png";
import Top10 from "@/assets/article-images/top10.png";
import AsianFocus from "@/assets/article-images/asianfocus.png";
import LikeButton from "./like-button";
import { getAllArticles } from "@/actions/article";
import type { Article } from "@/types/article";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function App() {
  // const [articles, setArticles] = useState<Article[]>([]);
  // (async () => {
  //   setArticles(await getAllArticles());
  // })();
  const { data: articles } = useSWR<Article[]>("/api/articles", fetcher);
  // console.log(articles);

  const articleCards = articles?.filter(
    (article) => article.type === "article"
  );
  // console.log(articleCards);

  const eventCards = articles?.filter((article) => article.type === "event");
  // console.log(eventCards);

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
          <LikeButton />
        </div>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={articleCard.image!}
      />
    </Card>
  );

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {articleCards?.map((articleCard) => articleCardComponent(articleCard))}

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="text-tiny text-white/60 uppercase font-bold">
                Festival Happenings
              </p>
              <Link
                isExternal
                href="https://tiff.net"
                underline="hover"
                showAnchorIcon
                className="text-white font-medium text-large mt-1"
              >
                Mulan Film Festival
              </Link>
            </div>
            <LikeButton />
          </div>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src={mulaniff2024.src}
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
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="text-tiny text-white/60 uppercase font-bold">
                More Screenings
              </p>
              <Link
                isExternal
                href="https://tiff.net"
                underline="hover"
                showAnchorIcon
                className="text-white font-medium text-large mt-1"
              >
                July Rhapsody 4K
              </Link>
            </div>
            <LikeButton />
          </div>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={julyRhapsody.src}
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
    </div>
  );
}
