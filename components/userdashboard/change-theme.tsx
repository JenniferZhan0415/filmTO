"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, Button } from "@nextui-org/react";
type Color =
  //   | "success"
  //   | "primary"
  //   | "secondary"
  "default" | "warning" | "danger";

export default function ChangeTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const colors: { color: Color; name: string; theme: string }[] = [
    {
      color: "default",
      name: "Default Theme",
      theme: "light",
    },
    {
      color: "warning",
      name: "Star War",
      theme: "dark",
    },
    {
      color: "danger",
      name: "The Grand Budapest Hotel",
      theme: "modern",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4">
      {colors.map((color) => {
        return (
          <Tooltip
            key={color.name}
            color={color.color}
            content={color.name}
            className="capitalize"
          >
            <Button
              onClick={() => setTheme(color.theme)}
              variant="flat"
              color={color.color}
              className="capitalize "
            >
              {color.name}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
}
