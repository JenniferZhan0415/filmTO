import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function JoinUsButton() {
  const { theme } = useTheme();
  const themeColor = () => {
    switch (theme) {
      case "light":
        return "blue";
      case "dark":
        return "yellow";
      case "modern":
        return "pink";
    }
  };
  return (
    <section className="flex flex-row gap-4 w-full">
      {/* <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
        as={Link}
        href="/signup"
      >
        Sign up today!
      </Button> */}
      <Button
        radius="full"
        color="primary"
        className="bg-gradient-to-tr text-white shadow-lg w-full"
        as={Link}
        href="/login"
      >
        Join us today!
      </Button>
    </section>
  );
}
