"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import { NewUserIcon } from "@/components/icons";
type Variant = "bordered" | "flat" | "faded" | "underlined";

interface VariantConfig {
  name: string;
  style: Variant;
}

const variants: VariantConfig[] = [
  {
    name: "Email",
    style: "bordered",
  },
  {
    name: "Password",
    style: "flat",
  },
];

export default function LoginInput() {
  return (
    <div className="w-full flex flex-col items-center justify-end pr-4 border-none  sm:border-r-1 sm:border-solid sm:border-lightgray-500">
      <NewUserIcon height={15} width={15} />
      <h4 className="text-default-500 mt-2 text-center">
        Don&apos;t have an account yet?
      </h4>
      <Link className="mb-4 cursor-pointer" href="/signup" underline="hover">
        Click here to sign up!
      </Link>
      {variants.map((variant) => (
        <div
          key={variant.name}
          className="flex w-full flex-wrap md:flex-nowrap mb-4"
        >
          <Input
            isRequired
            errorMessage={`Please enter a valid ${variant.name}`}
            label={variant.name}
            type={variant.name}
            variant={variant.style}
          />
        </div>
      ))}
    </div>
  );
}
