import GuideZH from "@/markdown/ticket-guide-2024/tiff-ticket-guide-cn.mdx";
import GuideEN from "@/markdown/ticket-guide-2024/tiff-ticket-guide-en.mdx";
import LanguageToggle from "@/components/article/language-toggle";

export default function TiffTicketGuide() {
  return <LanguageToggle english={<GuideEN />} chinese={<GuideZH />} />;
}
