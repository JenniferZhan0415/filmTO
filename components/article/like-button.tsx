"use client";

import { Button } from "@nextui-org/react";
import { HeartIcon } from "./heart-icon";
import React from "react";

export default function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10"
      radius="full"
      variant="flat"
      onPress={() => setLiked((v) => !v)}
    >
      <HeartIcon
        className={liked ? "[&>path]:stroke-transparent" : ""}
        fill={liked ? "currentColor" : "none"}
      />
    </Button>
  );
}
