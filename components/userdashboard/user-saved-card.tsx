"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import { StarIcon } from "@/components/icons";
import { ArticleIcon } from "@/components/icons";
import { FilmIcon } from "@/components/icons";
import { SavedIcon } from "@/components/icons";
import { likedItems } from "@/actions/like";
import { useSession } from "next-auth/react";

import { LikeType } from "@/types/like";

const icons = {
  cinema: <StarIcon className="text-default-500" />,
  article: <ArticleIcon className="text-default-500" />,
  film: <FilmIcon className="text-default-500" />,
  festival: <SavedIcon className="text-default-500" />,
};

export default function UserSavedCard({ type }: { type: LikeType }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<Awaited<ReturnType<typeof likedItems>>>(
    []
  );

  useEffect(() => {
    if (status === "authenticated") {
      (async () => {
        const likes = await likedItems(session!.user!.userId, type);
        setItems(likes);
      })();
    }
  }, [status]);

  // whether user has liked any items in the current type
  const cardItems = items?.map((item) => {
    if ("name" in item)
      return (
        <li className="mb-2" key={item.name}>
          {item.name}
        </li>
      );
    else if ("title" in item)
      return (
        <li className="mb-2" key={item.title}>
          {item.title}
        </li>
      );
  });

  return (
    <Card className="sm:w-1/3 flex-wrap min-w-40">
      <CardHeader className="flex gap-3">
        <div className="flex flex-row w-full justify-between">
          <p className="text-md text-primary capitalize">Saved {type}s</p>
          {icons[type]}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {cardItems && cardItems?.length > 0 ? (
          cardItems
        ) : (
          <p>{`You can like and save ${type}s by clicking the link below`}</p>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={`http://localhost:3000/${type}`}
          className="capitalize"
        >
          Visit {type} page
        </Link>
      </CardFooter>
    </Card>
  );
}
