import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function JoinUsButton() {
  return (
    <section className="flex flex-row gap-4 w-full">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
        as={Link}
        href="/signup"
      >
        Sign up today!
      </Button>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-lg w-full"
        as={Link}
        href="/login"
      >
        Log in to my account
      </Button>
    </section>
  );
}
