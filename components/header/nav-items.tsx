"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <NavbarContent
      className="hidden md:flex basis-full lg:basis-2/3"
      justify="center"
    >
      <Tabs
        aria-label="Navigation"
        color="primary"
        radius="full"
        selectedKey={pathname}
      >
        {siteConfig.navItems.map((item) => (
          <Tab key={item.href} href={item.href} title={item.label} />
        ))}
      </Tabs>
    </NavbarContent>
  );
};

export default NavBar;
