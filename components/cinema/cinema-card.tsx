import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { HeartIcon } from "./heart-icon";
import { Cinema } from "@/types/cinema";

export default function CinemaCard({ cinema }: { cinema: Cinema }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            isExternal
            href={cinema.website!}
            underline="hover"
            className="max-w-36 text-large font-medium"
          >
            {cinema.name}
          </Link>
          <Button
            isIconOnly
            className="text-default-900/60 data-[hover]:bg-foreground/10 "
            radius="full"
            variant="light"
            onPress={() => setLiked((v) => !v)}
          >
            <HeartIcon
              className={liked ? "[&>path]:stroke-transparent" : ""}
              fill={liked ? "currentColor" : "none"}
            />
          </Button>
        </div>
        <small className="text-default-500 max-w-32 font-medium pb-1">
          Established in: {cinema.established}
        </small>
        <small className="text-default-500 max-w-32">{cinema.address}</small>
      </CardHeader>
      <CardBody className="overflow-hidden">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={cinema.image!}
          width={160}
        />
      </CardBody>
    </Card>
  );
}
