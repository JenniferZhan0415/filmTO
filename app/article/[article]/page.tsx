"use client";

import { textFetcher as fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import { remark } from "remark";
import useSWR from "swr";
import html from "remark-html";

export default function Page({ params }: { params: { article: string } }) {
  const [content, setContent] = useState("");
  const { data } = useSWR(
    `/markdown/ticket-guide-2024/${params.article}.md`,
    fetcher
  );

  const fetchMarkdown = async () => {
    const processed = await remark().use(html).process(data);
    setContent(processed.toString());
  };

  useEffect(() => {
    if (!data) return;
    fetchMarkdown();
  }, [data]);

  return (
    <>
      <div>My Post</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
