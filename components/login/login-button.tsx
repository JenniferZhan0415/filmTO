import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function LoginButton() {
  return (
    <div className="flex w-full justify-between gap-4 items-center">
      <Button
        href="/"
        as={Link}
        className="w-full"
        color="default"
        variant="bordered"
      >
        Cancel
      </Button>
      <Button href="/dashboard" as={Link} className="w-full" color="primary">
        Log in
      </Button>
    </div>
  );
}
