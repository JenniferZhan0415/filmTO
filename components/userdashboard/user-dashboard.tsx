"use client";
import UserInfo from "./user-info";
import { title } from "@/components/primitives";
import UserEditLink from "./user-edit-link";
import ChangeTheme from "./change-theme";
import UserSavedCard from "./user-saved-card";

export default function UserDashboard() {
  return (
    <section className="flex flex-col items-center w-full px-10">
      <h1 className={`${title({ color: "blue" })} pb-4`}>
        Welcome back, Jennifer!
      </h1>
      <h4 className="text-default-500 mb-6">
        Change your theme by favorite film
      </h4>

      <div className="flex flex-row justify-between w-full items-center gap-4 mb-4 ">
        <div className="flex flex-col items-start min-w-fit">
          <UserInfo />
          <UserEditLink />
        </div>
        <ChangeTheme />
      </div>
      <div className="flex flex-col  sm:flex-row justify-between w-full gap-4 mb-2">
        <UserSavedCard />
        <UserSavedCard />
        <UserSavedCard />
      </div>
    </section>
  );
}
