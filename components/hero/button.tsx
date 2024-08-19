import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function JoinUsButton() {
  return (
    <section className="flex flex-row gap-4 w-full">
      <Button
        as={Link}
        className="bg-gradient-to-tr text-white shadow-lg w-full"
        color="primary"
        href="/login"
        radius="full"
      >
        Join us today!
      </Button>
    </section>
  );
}
