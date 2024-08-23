import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function SignUpButton({ isDisabled }: { isDisabled: boolean }) {
  return (
    <div className="flex w-full justify-between gap-4 items-center">
      <Button
        as={Link}
        className="w-full"
        color="default"
        href="/login"
        variant="bordered"
      >
        Cancel
      </Button>
      <Button
        className="w-full"
        color="primary"
        type="submit"
        isDisabled={isDisabled}
      >
        Sign up
      </Button>
    </div>
  );
}
