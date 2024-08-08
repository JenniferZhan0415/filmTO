import React from "react";
import { Listbox, ListboxItem, RadioGroup, Radio } from "@nextui-org/react";
import { ListboxWrapper } from "./listboxWrapper";
import { EditDocumentIcon } from "./edit-document-icon";

export default function CinemaList() {
  const [selectedVariant, setSelectedVariant] = React.useState("solid");
  const [selectedColor, setSelectedColor] = React.useState("default");

  const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"];
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="flex flex-row gap-4">
      <ListboxWrapper>
        <Listbox
          aria-label="Listbox Variants"
          // color={selectedColor}
          // variant={selectedVariant}
        >
          <ListboxItem key="new">New file</ListboxItem>
          <ListboxItem key="copy">Copy link</ListboxItem>
          <ListboxItem key="edit">Edit file</ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
            Delete file
          </ListboxItem>
          {/* <CinemaTitle /> */}
        </Listbox>
      </ListboxWrapper>
    </div>
  );
}
