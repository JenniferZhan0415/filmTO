import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function FilmCard() {
  return (
    <section className="flex gap-4 justify-center w-full">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">2023</p>
          <h4 className="font-bold text-large"> American Fiction</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            width={190}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">2023</p>
          <h4 className="font-bold text-large"> American Fiction</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            width={190}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">2023</p>

          <h4 className="font-bold text-large"> American Fiction</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            width={190}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">2023</p>
          <h4 className="font-bold text-large"> American Fiction</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            width={190}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">2023</p>
          <h4 className="font-bold text-large"> American Fiction</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            width={190}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
    </section>
  );
}
