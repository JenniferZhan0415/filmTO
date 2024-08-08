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

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import NavbarMenu from "@/components/header/nav-menu";
import { GithubIcon } from "@/components/icons";
import logo from "@/public/Logo.svg";
import Image from "next/image";

export const Navbar = () => (
  <NextUINavbar maxWidth="xl" position="sticky">
    {/* Start */}
    <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image priority src={logo} alt="filmTo logo" className="max-w-14" />
          <p className="font-bold text-inherit text-gray-500 ">filmTO</p>
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
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarItem>
    </NavbarContent>

    {/* Menu for mobile view*/}
    <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
      <ThemeSwitch />
      <NavbarMenuToggle />
    </NavbarContent>

    <NavbarMenu />
  </NextUINavbar>
);
