import React from "react";
import { Image } from "@nextui-org/react";
interface FestivalImageProps {
  image: string;
}
export default function FestivalImage({ image }: FestivalImageProps) {
  return (
    <Image
      isZoomed
      alt="NextUI Fruit Image with Zoom"
      className="max-h-64 min-h-64 max-w-52"
      src={image}
      width={"100%"}
    />
  );
}
