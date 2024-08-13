import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import { StarIcon } from "@/components/icons";

export default function UserSavedCard() {
  return (
    <Card className="sm:w-1/3">
      <CardHeader className="flex gap-3">
        <div className="flex flex-row w-full  justify-between">
          <p className="text-md">Saved Cinemas</p>
          <StarIcon className="text-default-500" />
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit Cinema Map
        </Link>
      </CardFooter>
    </Card>
  );
}
