"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { UserIcon } from "./user-icon";
type Variant = "bordered" | "flat" | "faded" | "underlined";

interface VariantConfig {
  name: string;
  style: Variant;
}

export default function LoginInput() {
  const variants: VariantConfig[] = [
    {
      name: "Name:",
      style: "bordered",
    },
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
    <div className="w-full flex flex-col justify-end pr-4 border-r-1 border-solid border-lightgray-500">
      {variants.map((variant) => (
        <div
          key={variant.name}
          className="flex w-full flex-wrap md:flex-nowrap mb-4"
        >
          <Input
            type={variant.name}
            variant={variant.style}
            label={variant.name}
            endContent={<UserIcon />}
          />
        </div>
      ))}
    </div>
  );
}
