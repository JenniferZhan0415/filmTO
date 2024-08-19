"use client";

import type { TMDBFilm } from "@/types/film";

import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { HeartIcon } from "./icons";

import { hasLikedItem, like, unlike } from "@/actions/like";
import { saveFilm } from "@/actions/film";

type Entity = TMDBFilm;

export default function LikeButton({
  type,
  id,
  entity,
}: {
  type: string;
  id: number;
  entity?: Entity;
}) {
  const router = useRouter();
  const [liked, setLiked] = React.useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      (async () => {
        const likes = await hasLikedItem(session!.user!.userId, type, id);

        setLiked(likes);
      })();
    }
  }, [status]);

  const handleLike = async () => {
    if (status === "unauthenticated") {
      router.push("/login");

      return;
    } else if (status === "authenticated") {
      if (type === "film" && entity) {
        await saveFilm(entity as TMDBFilm);
      }
      if (!liked) like(session?.user!.userId, type, id);
      else unlike(session?.user!.userId, type, id);
    }
    setLiked((v) => !v);
  };

  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
      onPress={handleLike}
    >
      <HeartIcon
        className={liked ? "[&>path]:stroke-transparent" : ""}
        fill={liked ? "currentColor" : "none"}
      />
    </Button>
  );
}
