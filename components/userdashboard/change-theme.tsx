"use client";
import { updateUser } from "@/actions/user";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
type Color = "default" | "warning" | "danger";

export default function ChangeTheme() {
  const { setTheme } = useTheme();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
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

  const handleChangeTheme = async (theme: string) => {
    try {
      setTheme(theme);
      await updateUser(session!.user, theme);
    } catch (error) {
      console.error("Failed to update theme:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4 min-w-40">
      {colors.map((color) => {
        return (
          <Tooltip
            key={color.name}
            color={color.color}
            content={color.name}
            className="capitalize"
          >
            <Button
              onClick={() => handleChangeTheme(color.theme)}
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
