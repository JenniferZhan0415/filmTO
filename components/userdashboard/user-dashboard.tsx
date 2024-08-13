"use client";
import UserInfo from "./user-info";
import { title } from "@/components/primitives";
import ChangeTheme from "./change-theme";
import UserSavedCard from "./user-saved-card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserDashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push("/login");
  }, []);

  return (
    session && (
      <section className="flex flex-col items-center w-full px-10">
        <h1 className={`${title({ color: "blue" })} pb-4 text-center`}>
          Welcome back, Jennifer!
        </h1>
        <h4 className="text-default-500 mb-6">
          Change your theme by favorite film
        </h4>

        <div className="flex flex-col sm:flex-row justify-between w-full h-full  items-center gap-4 mb-6 ">
          <div className="flex flex-col items-start min-w-fit justify-between">
            <UserInfo />
          </div>
          <ChangeTheme />
        </div>
        <div className="flex flex-col  sm:flex-row justify-between w-full gap-4 mb-2">
          <UserSavedCard />
          <UserSavedCard />
          <UserSavedCard />
          <UserSavedCard />
        </div>
      </section>
    )
  );
}
