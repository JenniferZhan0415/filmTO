import React from "react";
import { User } from "@nextui-org/react";

export default function UserInfo({ session }) {
  return (
    <div className="flex sm:flex-row flex-wrap flex-col items-center w-full sm:items-end sm:justify-center  lg:justify-start">
      <User
        name={session?.user?.name}
        description={session?.user?.email}
        avatarProps={{
          src: session?.user?.image!,
        }}
      />
    </div>
  );
}
