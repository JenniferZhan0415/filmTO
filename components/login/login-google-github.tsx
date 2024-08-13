import React from "react";
import { Button, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function LoginGoogleGithub() {
  return (
    <div className="flex w-full justify-between gap-4 items-center">
      <Button
        href="/"
        as={Link}
        className="w-full"
        color="default"
        variant="bordered"
        onClick={() => signIn("google")}
      >
        Login with Google
      </Button>
      <Button
        href="/dashboard"
        as={Link}
        onClick={() => signIn("github")}
        className="w-full"
        color="primary"
      >
        Login with Github
      </Button>
    </div>
  );
}
