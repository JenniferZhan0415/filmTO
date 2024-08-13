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
      name: "default",
    },
    {
      theme: "warning",
      name: "Star War",
    },
    {
      theme: "danger",
      name: "The grand budapest hotel",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row  flex-wrap justify-end">
      {colors.map((color) => {
        return (
          <Tooltip
            key={color.name}
            color={color.theme}
            content={color.name}
            className="capitalize"
          >
            <Button
              variant="flat"
              color={color.theme}
              className="capitalize ml-2 mb-2"
            >
              {color.name}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
}
