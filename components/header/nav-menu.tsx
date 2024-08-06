import { NavbarMenu } from "@nextui-org/navbar";

import NavbarMenuItem from "./nav-menu-item";

import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";

const NavMenu = () => {
  // concat navbar and menu items
  const navItems: NavItem[] = [
    ...siteConfig.navItems,
    ...siteConfig.navMenuItems,
  ];

  return (
    <NavbarMenu>
      <div className="mx-4 mt-2 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.label} item={item} />
        ))}
      </div>
    </NavbarMenu>
  );
};

export default NavMenu;
