import React from "react";
import { User } from "@nextui-org/react";
import UserEditLink from "./user-edit-link";

export default function UserInfo() {
  return (
    <div className="flex sm:flex-row flex-col items-center w-full sm:items-end sm:gap-4 ">
      <User
        name="Jennifer Zhan"
        description="jennifer.zhan.2015@gmail.com"
        avatarProps={{
          src: "/user/jennifer.jpg",
        }}
      />
      <UserEditLink />
    </div>
  );
}
