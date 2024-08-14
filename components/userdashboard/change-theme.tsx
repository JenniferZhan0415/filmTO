import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
type Color =
  //   | "default"
  //   | "primary"
  //   | "secondary"
  "success" | "warning" | "danger";

export default function ChangeTheme() {
  const colors: { theme: Color; name: string }[] = [
    {
      theme: "success",
      name: "Default Theme",
    },
    {
      theme: "warning",
      name: "Star War",
    },
    {
      theme: "danger",
      name: "The Grand Budapest Hotel",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4">
      {colors.map((color) => {
        return (
          <Tooltip
            key={color.name}
            color={color.theme}
            content={color.name}
            className="capitalize"
          >
            <Button variant="flat" color={color.theme} className="capitalize ">
              {color.name}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
}
