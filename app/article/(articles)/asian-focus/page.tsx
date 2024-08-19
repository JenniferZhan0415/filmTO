import GuideZH from "@/markdown/ticket-guide-2024/tiff-asian-focus-cn.mdx";
import GuideEN from "@/markdown/ticket-guide-2024/tiff-asian-focus-en.mdx";
import LanguageToggle from "@/components/article/language-toggle";

export default function TiffTicketGuide() {
  return <LanguageToggle chinese={<GuideZH />} english={<GuideEN />} />;
}
