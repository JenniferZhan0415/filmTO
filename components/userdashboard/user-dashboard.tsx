"use client";
import UserInfo from "./user-info";
import { title } from "@/components/primitives";
import ChangeTheme from "./change-theme";
import UserSavedCard from "./user-saved-card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import UserEditLink from "./user-edit-link";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <Spinner label="Authenticating..." color="primary" labelColor="primary" />
    );
  }

  return (
    <section className="flex flex-col items-center w-full px-2">
      <h1 className={`${title({ color: "blue" })} pb-4 text-center`}>
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
        <UserSavedCard />
        <UserSavedCard />
        <UserSavedCard />
        <UserSavedCard />
      </div>
    </section>
  );
}
