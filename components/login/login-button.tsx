import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function LoginButton() {
  return (
    <div className="flex w-full justify-between gap-6 items-center">
      <Button
        as={Link}
        className="w-full"
        color="default"
        href="/"
        variant="bordered"
      >
        Cancel
      </Button>
      <Button className="w-full" color="primary" type="submit">
        Log in
      </Button>
    </div>
  );
}
