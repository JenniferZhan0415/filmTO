import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function SignUpButton() {
  return (
    <div className="flex w-full justify-between gap-4 items-center">
      <Button
        href="/login"
        as={Link}
        className="w-full"
        color="default"
        variant="bordered"
      >
        Cancel
      </Button>
      <Button href="/login" as={Link} className="w-full" color="primary">
        Sign up
      </Button>
    </div>
  );
}
