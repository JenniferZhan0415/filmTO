import React from "react";
import { Link } from "@nextui-org/react";

export default function UserEditLink() {
  return (
    <div className="flex flex-col justify-start gap-0  mt-2 sm:flex-row sm:gap-4 mb-1  items-start">
      <Link href="#" underline="hover" className="text-xs">
        Update user info
      </Link>
      {/* <Link href="#" underline="hover" className="text-xs">
        Edit user name
      </Link>
      <Link href="#" underline="hover" className="text-xs">
        Change password
      </Link> */}
    </div>
  );
}
