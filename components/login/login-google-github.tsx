import React from "react";
import { Button, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";

import { GithubIcon } from "@/components/icons";
import { GoogleIcon } from "@/components/icons";

export default function LoginGoogleGithub() {
  return (
    <div className="flex flex-col items-center w-full justify-end gap-4 mb-4">
      <div className="flex items-center gap-4">
        <GoogleIcon />
        or
        <GithubIcon />
      </div>
      <h4 className="text-default-500 mb- text-center">
        Login with your social account
      </h4>
      <Button
        as={Link}
        className="w-full h-14"
        color="primary"
        variant="ghost"
        onClick={() => signIn("google")}
      >
        Login with Google
      </Button>
      <Button
        as={Link}
        className="w-full  h-14"
        color="primary"
        variant="ghost"
        onClick={() => signIn("github")}
      >
        Login with Github
      </Button>
    </div>
  );
}
