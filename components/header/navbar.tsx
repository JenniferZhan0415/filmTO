"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import NavbarItems from "./nav-items";
import Image from "next/image";
import { ThemeSwitch } from "@/components/theme-switch";
import NavbarMenu from "@/components/header/nav-menu";
import logo from "@/public/logo/logo.svg";
import { useSession } from "next-auth/react";
import { GithubIcon } from "../icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@nextui-org/react";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const [avatar, setAvatar] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("in authenticated");
      // fetch user avatar
      setAvatar(session?.user?.image!);
    }
  }, [status]);

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Start */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image priority src={logo} alt="filmTo logo" className="max-w-14" />
            <p className="font-bold text-inherit" style={{ color: "#71717A" }}>
              filmTO
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle */}
      <NavbarItems />

      {/* End */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {avatar ? (
            <User
              avatarProps={{
                src: avatar,
              }}
              className="cursor-pointer"
              onClick={() => router.push("/login")}
            />
          ) : (
            <GithubIcon
              className="text-default-500 cursor-pointer"
              onClick={() => router.push("/login")}
            />
          )}
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      {/* Menu for mobile view*/}
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        {avatar ? (
          <User
            avatarProps={{
              src: avatar,
            }}
            className="cursor-pointer"
            onClick={() => router.push("/login")}
          />
        ) : (
          <GithubIcon
            className="text-default-500 cursor-pointer"
            onClick={() => router.push("/login")}
          />
        )}
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu />
    </NextUINavbar>
  );
};
