"use client";

import { Link } from "@nextui-org/link";
import { NavbarMenuItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

import { NavItem } from "@/types";
import { signOut } from "next-auth/react";

const linkColor = (label: string) => {
  switch (label) {
    case "Sign in":
      return "primary";
    case "Logout":
      return "danger";
    default:
      return "foreground";
  }
};

const MenuItem = ({ item }: { item: NavItem }) => {
  const { label, href } = item;
  const pathName = usePathname();

  // logout link
  if (label === "Logout") {
    return (
      <NavbarMenuItem isActive={pathName === href}>
        <Link
          onClick={() => signOut({ callbackUrl: "/" })}
          color={linkColor(label)}
          href={href}
          size="lg"
          underline="hover"
        >
          Log out
        </Link>
      </NavbarMenuItem>
    );
  }

  return (
    <NavbarMenuItem isActive={pathName === href}>
      <Link color={linkColor(label)} href={href} size="lg" underline="hover">
        {label}
      </Link>
    </NavbarMenuItem>
  );
};

export default MenuItem;
