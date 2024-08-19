import GuideZH from "@/markdown/ticket-guide-2024/tiff-must-see-cn.mdx";
import GuideEN from "@/markdown/ticket-guide-2024/tiff-must-see-en.mdx";
import LanguageToggle from "@/components/article/language-toggle";

export default function TiffTicketGuide() {
  return <LanguageToggle chinese={<GuideZH />} english={<GuideEN />} />;
}
