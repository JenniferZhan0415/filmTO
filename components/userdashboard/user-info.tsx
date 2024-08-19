import React from "react";
import { User } from "@nextui-org/react";
import { Session } from "next-auth";

export default function UserInfo({ session }: { session: Session }) {
  return (
    <div className="flex sm:flex-row flex-wrap flex-col items-center w-full sm:items-end sm:justify-center lg:justify-start">
      <User
        avatarProps={{
          src: session?.user?.image!,
        }}
        description={session?.user?.email}
        name={session?.user?.name}
      />
    </div>
  );
}
