import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { EditDocumentIcon } from "./edit-document-icon";
import { ListboxWrapper } from "./listbox-wrapper";
import LikeButton from "./like-button";
export default function ArticleList() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="w-full">
      <ListboxWrapper>
        <Listbox variant="faded" aria-label="Listbox menu with icons">
          <ListboxItem
            key="edit"
            showDivider
            startContent={<EditDocumentIcon className={iconClasses} />}
            endContent={<LikeButton />}
          >
            Edit file
          </ListboxItem>

          <ListboxItem
            key="edit"
            showDivider
            startContent={<EditDocumentIcon className={iconClasses} />}
            endContent={<LikeButton />}
          >
            Edit file
          </ListboxItem>

          <ListboxItem
            key="edit"
            showDivider
            startContent={<EditDocumentIcon className={iconClasses} />}
            endContent={<LikeButton />}
          >
            Edit file
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </div>
  );
}
