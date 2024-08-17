"use client";

import { NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tab, Tabs } from "@nextui-org/tabs";

import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";

const NavBar = () => {
  const pathname = usePathname().split("/").slice(0, 2).join("/");

  return (
    <NavbarContent
      className="hidden md:flex basis-full lg:basis-2/3 font-semibold"
      justify="center"
    >
      <Tabs
        aria-label="Navigation"
        color="primary"
        radius="full"
        selectedKey={pathname}
      >
        {siteConfig.navItems.map((item: NavItem) => (
          <Tab
            key={item.href}
            title={
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            }
          />
        ))}
      </Tabs>
    </NavbarContent>
  );
};

export default NavBar;
