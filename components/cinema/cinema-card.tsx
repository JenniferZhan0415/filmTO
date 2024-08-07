import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CinemaCard() {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <h4 className="font-bold text-large">TIFF Lightbox</h4>
        <small className="text-default-500">
          350 King St W, Toronto, ON M5V 3X5
        </small>
      </CardHeader>
      <CardBody className="overflow-hidden">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={160}
        />
      </CardBody>
    </Card>
  );
}
