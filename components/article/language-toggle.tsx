"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { TranlateIcon } from "@/components/icons";

interface LanguageToggleProps {
  english: React.ReactNode;
  chinese: React.ReactNode;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  english,
  chinese,
}) => {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <div className="flex flex-row w-full items-start justify-center">
      <div className="prose prose-headings:text-default-900">
        {isEnglish ? english : chinese}
      </div>
      <Button
        isIconOnly
        size="sm"
        color="primary"
        onClick={() => setIsEnglish(!isEnglish)}
      >
        <TranlateIcon />
      </Button>
    </div>
  );
};

export default LanguageToggle;
