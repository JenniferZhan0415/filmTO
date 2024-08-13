import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ListboxWrapper: React.FC<Props> = ({ children }) => (
  <div className="w-full h-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
