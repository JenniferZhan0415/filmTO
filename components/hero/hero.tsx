"use client";

import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import logo from "@/public/filmTO_logo.png";
import Image from "next/image";
import { subtitle, title } from "../primitives";

export default function Hero() {
  return (
    <section className="sm:flex">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 sm:basis-1/3"
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center">
          <Image priority alt="Album cover" src={logo} />
        </CardBody>
      </Card>

      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 sm:basis-2/3 p-3"
        shadow="sm"
      >
        <CardBody>
          <div className="flex flex-col  items-center justify-center">
            <h1 className={title({ color: "blue" })}>
              Art House Cinemas &nbsp;
            </h1>
            <h1 className={title({ color: "cyan" })}>& Film Festivals!</h1>
            <h2 className={subtitle({ class: "mt-0 text-left" })}>
              🎥 A film fans club based in Toronto, dedicated to recommending
              multicultural film festivals and events, with a focus on art-house
              and independent cinemas.
            </h2>
            <h2 className={subtitle({ class: "mt-2 text-left" })}>
              🌈 Click to change page theme by your favorite movies!
            </h2>
          </div>

          <div className="flex w-full items-center justify-center mt-1">
            <Link
              href="/"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "ghost",
                fullWidth: true,
              })}
            >
              Default theme
            </Link>
            <Link
              href="/"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "ghost",
                fullWidth: true,
              })}
            >
              Star War theme
            </Link>
            <Link
              href="/"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "ghost",
                fullWidth: true,
              })}
            >
              The Grand Budapest hotel theme
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
