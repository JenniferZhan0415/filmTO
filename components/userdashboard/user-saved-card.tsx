"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import { StarIcon } from "@/components/icons";
import { likedItems } from "@/actions/like";
import { useSession } from "next-auth/react";

export default function UserSavedCard({ type }: { type: string }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<Awaited<ReturnType<typeof likedItems>>>(
    []
  );

  useEffect(() => {
    if (status === "authenticated") {
      (async () => {
        const likes = await likedItems(session!.user!.userId, type);
        setItems(likes);
      })();
    }
  }, [status]);

  return (
    <Card className="sm:w-1/3">
      <CardHeader className="flex gap-3">
        <div className="flex flex-row w-full  justify-between">
          <p className="text-md text-primary capitalize">Saved {type}s</p>
          <StarIcon className="text-default-500" />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {items?.some(({ [type]: item }) => item) ? (
          items.map(({ [type]: item }) =>
            item ? (
              <li className="mb-2" key={item.name || item.title}>
                {item.name || item.title}
              </li>
            ) : null
          )
        ) : (
          <p>{`You can like and save ${type}s by clicking the link below`}</p>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={`http://localhost:3000/${type}`}
          className="capitalize"
        >
          Visit {type} page
        </Link>
      </CardFooter>
    </Card>
  );
}
