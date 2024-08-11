import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import julyRhapsody from "@/assets/article-images/julyRhapsody.webp";
import TIFF24Poster from "@/assets/article-images/TIFF24Poster.png";
import mulaniff2024 from "@/assets/article-images/mulaniff2024.png";
import LikeButton from "./like-button";

export default function App() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 pt-4 flex-col !items-start bg-black/50 ">
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="text-tiny text-white/60 uppercase font-bold">
                Key Dates
              </p>
              <h4 className="text-white font-medium text-large leading-6">
                TIFF 2024 Festival tickets guide
              </h4>
            </div>
            <LikeButton />
          </div>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={TIFF24Poster.src}
        />
        {/* <CardFooter className="absolute bg-white/30 bottom-0 z-10 flex flex-row justify-items-start ">
          <LikeButton />
        </CardFooter> */}
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Must See
          </p>
          <h4 className="text-white font-medium text-large">
            10 Movies to watch in 2024 TIFF
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Asian Focus
          </p>
          <h4 className="text-white font-medium text-large">
            10 Asian movies to watch in 2024 TIFF
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            More Festivals
          </p>
          <h4 className="text-white font-medium text-2xl">
            Mulan film Festival
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={mulaniff2024.src}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Ticket Available Now</p>
            <p className="text-black text-tiny">Aug 9 - Aug 17, 2024</p>
          </div>
          <Button
            onClick={() => window.open("https://mulanfestival.com", "_blank")}
            className="text-tiny"
            color="primary"
            radius="full"
            size="sm"
          >
            Go to website
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            More Screenings
          </p>
          <h4 className="text-white/90 font-medium text-xl">July Rhapsody</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={julyRhapsody.src}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">@revuecinema</p>
              <p className="text-tiny text-white/60">Mon Sep 09, 09:30 PM</p>
              <p className="text-tiny text-white/60">Tue Sep 10, 06:45 PM</p>
              <p className="text-tiny text-white/60">Wed Sep 11, 09:30 PM</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            onClick={() =>
              window.open(
                "https://revuecinema.ca/films/revue-event-july-rhapsody-2002-new-4k-restoration/",
                "_blank"
              )
            }
          >
            Get Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
