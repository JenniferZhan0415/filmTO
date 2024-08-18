"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Loading from "../loading";

import UserEditLink from "./user-edit-link";
import UserSavedCard from "./user-saved-card";
import ChangeTheme from "./change-theme";
import UserInfo from "./user-info";

import { title } from "@/components/primitives";
import { getUserByEmail } from "@/actions/user";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { theme: globalTheme, setTheme: setGlobalTheme } = useTheme();
  const [theme, setTheme] = useState(globalTheme);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    // fetch user theme from db
    (async () => {
      const user = await getUserByEmail(session?.user?.email!);

      if (!user) {
        router.push("/login");

        return;
      }
      setGlobalTheme(user.theme!);
      setTheme(user.theme!);
    })();
  }, [status]);

  // user toggled the theme button
  useEffect(() => {
    setTheme(globalTheme);
  }, [globalTheme]);

  if (status === "loading") {
    return <Loading label="Authenticating..." />;
  }

  if (status === "authenticated") {
    return (
      <section className="flex flex-col items-center w-full px-2">
        <h1 className={`${title({ color: theme })} pb-4 text-center`}>
          Welcome back, {session?.user?.name}!
        </h1>
        <div className="flex items-center mb-6 gap-4">
          <h4 className="text-default-500 ">
            Change the website theme by your favorite film
          </h4>
          <UserEditLink />
        </div>
        <div className="flex flex-col lg:justify-between md:flex-row md:justify-between sm:items-center  w-full h-full gap-4 mb-6 ">
          <div className="flex flex-col items-start min-w-fit justify-between">
            <UserInfo session={session} />
          </div>
          <ChangeTheme />
        </div>
        <div className="flex flex-col  sm:flex-row justify-between w-full gap-4 mb-2">
          <UserSavedCard type="cinema" />
          <UserSavedCard type="festival" />
          <UserSavedCard type="article" />
          <UserSavedCard type="film" />
        </div>
      </section>
    );
  }
}
