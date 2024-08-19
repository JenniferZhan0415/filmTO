"use client";

import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { HeartIcon } from "./icons";

import { hasLikedItem, like, unlike } from "@/actions/like";

export default function LikeButton({ type, id }: { type: string; id: number }) {
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

  const handleLike = () => {
    if (status === "unauthenticated") {
      router.push("/login");

      return;
    } else if (status === "authenticated") {
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
