"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { NewUserIcon } from "@/components/icons";
import { Link } from "@nextui-org/react";
type Variant = "bordered" | "flat" | "faded" | "underlined";

interface VariantConfig {
  name: string;
  style: Variant;
}

export default function LoginInput() {
  const variants: VariantConfig[] = [
    // {
    //   name: "Name:",
    //   style: "bordered",
    // },
    {
      name: "Email:",
      style: "bordered",
    },
    {
      name: "Password:",
      style: "flat",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-end pr-4 border-none  sm:border-r-1 sm:border-solid sm:border-lightgray-500">
      <NewUserIcon width={15} height={15} />
      <h4 className="text-default-500 mt-2 text-center">
        Don't have an account yet?
      </h4>
      <Link underline="hover" href="/signup" className="mb-4 cursor-pointer">
        Click here to sign up!
      </Link>
      {variants.map((variant) => (
        <div
          key={variant.name}
          className="flex w-full flex-wrap md:flex-nowrap mb-4"
        >
          <Input
            type={variant.name}
            variant={variant.style}
            label={variant.name}
          />
        </div>
      ))}
    </div>
  );
}
