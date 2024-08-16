"use client";
import { Card, CardBody } from "@nextui-org/react";
import LoginInput from "./login-input";
import { title } from "@/components/primitives";
import LoginButton from "./login-button";
import LoginGoogleGithub from "./login-google-github";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <Spinner label="Authenticating..." color="primary" labelColor="primary" />
    );
  }

  return (
    <>
      <section className="w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 min-w-80 pb-4 px-4"
          shadow="sm"
        >
          <CardBody className="flex items-center justify-center w-full">
            <h1 className={`${title({ color: "blue" })} pb-4`}>
              Welcome back!
            </h1>
            <h4 className="text-default-500 mb-6">Login to your account</h4>
            <div className="flex flex-col sm:flex-row w-full gap-4 mb-4 border-none sm:border-b-1 sm:border-solid sm:border-lightgray-500">
              <LoginInput />
              <LoginGoogleGithub />
            </div>

            <LoginButton />
          </CardBody>
        </Card>
      </section>
    </>
  );
}
