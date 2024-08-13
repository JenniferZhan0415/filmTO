"use client";
import { Card, CardBody } from "@nextui-org/react";
import LoginInput from "./login-input";
import { title } from "@/components/primitives";
import LoginButton from "./login-button";
import LoginGoogleGithub from "./login-google-github";

export default function Login() {
  return (
    <>
      <section className="w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 min-w-80 pb-4 px-40"
          shadow="sm"
        >
          <CardBody className="flex items-center justify-center w-full">
            <h1 className={`${title({ color: "blue" })} pb-4`}>
              Welcome back!
            </h1>
            <h4 className="text-default-500 mb-6">Login to your account</h4>
            <LoginInput />
            <LoginGoogleGithub />
            <LoginButton />
          </CardBody>
        </Card>
      </section>
    </>
  );
}
