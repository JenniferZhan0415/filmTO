import React from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";
import LikeButton from "../../components/like-button";
import { Cinema } from "@/types/cinema";

export default function CinemaCard({ cinema }: { cinema: Cinema }) {
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
          <LikeButton type="cinema" id={cinema.id} />
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
