import React from "react";
import { Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

export default function UserEditLink({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) {
  const { setTheme } = useTheme();

  return (
    <Link
      className="text-sm cursor-pointer"
      underline="hover"
      onClick={() => {
        setLoading(true);
        signOut({ callbackUrl: "/" });
        setTheme("light");
      }}
    >
      Log out
    </Link>
  );
}
