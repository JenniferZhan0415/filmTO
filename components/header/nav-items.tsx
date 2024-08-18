"use client";

import { NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";

import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";

const NavBar = () => {
  const pathname = usePathname();

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
          <Tab key={item.href} href={item.href} title={item.label} />
        ))}
      </Tabs>
    </NavbarContent>
  );
};

export default NavBar;
