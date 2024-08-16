import React from "react";
import { Button, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { NewUserIcon } from "@/components/icons";

export default function LoginGoogleGithub() {
  return (
    <div className="flex flex-col items-center w-full justify-end gap-4  mb-4">
      <NewUserIcon width={15} height={15} />
      <h4 className="text-default-500 mb-2 text-center">
        or login with your social account
      </h4>
      <Button
        as={Link}
        className="w-full"
        color="primary"
        variant="ghost"
        onClick={() => signIn("google")}
      >
        Login with Google
      </Button>
      <Button
        as={Link}
        onClick={() => signIn("github")}
        className="w-full"
        color="primary"
        variant="ghost"
      >
        Login with Github
      </Button>
    </div>
  );
}
