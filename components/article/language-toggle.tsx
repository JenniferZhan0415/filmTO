"use client";

import React, { useState } from "react";

interface LanguageToggleProps {
  englishContent: React.ReactNode;
  chineseContent: React.ReactNode;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  englishContent,
  chineseContent,
}) => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div>
      <button onClick={() => setIsEnglish(!isEnglish)}>
        {isEnglish ? "Switch to Chinese" : "切换到英文"}
      </button>
      <div>{isEnglish ? englishContent : chineseContent}</div>
    </div>
  );
};

export default LanguageToggle;
