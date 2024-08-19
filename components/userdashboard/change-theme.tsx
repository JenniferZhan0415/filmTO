"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { updateUser } from "@/actions/user";
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
      if (!session?.user) return;
      setTheme(theme);
      await updateUser(
        { ...session.user, id: session.user.userId.toString() },
        theme,
      );
    } catch (error) {
      return;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4 min-w-40">
      {colors.map((color) => {
        return (
          <Tooltip
            key={color.name}
            className="capitalize"
            color={color.color}
            content={color.name}
          >
            <Button
              className="capitalize "
              color={color.color}
              variant="flat"
              onClick={() => handleChangeTheme(color.theme)}
            >
              {color.name}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
}
