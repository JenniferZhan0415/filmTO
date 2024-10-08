"use client";

import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import { subtitle, title, Color } from "../primitives";

import JoinUsButton from "./button";

import logo from "@/public/logo/filmTO.png";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="w-full flex flex-col">
      <Card
        isBlurred
        className="flex flex-row justify-center items-center border-none bg-background/60 dark:bg-default-100/50 sm:min-h-42"
        shadow="sm"
      >
        <CardBody className="max-w-md">
          <Image priority alt="Album cover" src={logo} />
        </CardBody>
      </Card>

      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 sm:basis-2/3 p-3"
        shadow="sm"
      >
        <CardBody>
          <div className="flex flex-col  items-center justify-center mb-4">
            <h1 className={title({ color: theme as Color })}>
              Art House Cinemas &nbsp;
            </h1>
            <h1 className={title({ color: "cyan" })}>& Film Festivals!</h1>
            <h2 className={subtitle({ class: "mt-4 text-left" })}>
              🎥 A film fan club based in Toronto
            </h2>
            <h2 className={subtitle({ class: "mt-0 text-left" })}>
              🌈 Dedicated to recommending multicultural film festivals
            </h2>
            <h2 className={subtitle({ class: "mt-0 text-left" })}>
              🎞️ Focus on art-house and independent cinemas
            </h2>
            <h2 className={subtitle({ class: "mt-0 text-left" })}>
              🎬 Sharing the latest film events and reviews
            </h2>
          </div>
          <JoinUsButton />
        </CardBody>
      </Card>
    </section>
  );
}
