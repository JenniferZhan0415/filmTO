import React from "react";
import { Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function UserEditLink() {
  return (
    <div className="flex flex-col w-full justify-start sm:gap-4  mt-2 sm:flex-row gap-2 mb-1 items-center sm:justify-center  lg:justify-start">
      <Link href="#" underline="hover" className="text-sm cursor-pointer">
        Update user info
      </Link>
      <Link
        onClick={() => signOut({ callbackUrl: "/" })}
        underline="hover"
        className="text-sm cursor-pointer"
      >
        Log out
      </Link>
    </div>
  );
}
