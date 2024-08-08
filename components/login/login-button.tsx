import React from "react";
import { Button } from "@nextui-org/react";

export default function LoginButton() {
  return (
    <div className="flex w-full justify-between gap-4 items-center">
      <Button className="w-full" color="default" variant="bordered">
        Login
      </Button>
      <Button className="w-full" color="primary">
        Sign up
      </Button>
    </div>
  );
}
