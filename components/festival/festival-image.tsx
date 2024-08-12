import React from "react";
import { Image } from "@nextui-org/react";

export default function FestivalImage({ image }) {
  return (
    <Image
      isZoomed
      width={200}
      alt="NextUI Fruit Image with Zoom"
      src={image}
    />
  );
}
