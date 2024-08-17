"use client";

import { textFetcher as fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import { remark } from "remark";
import useSWR from "swr";
import html from "remark-html";

export default function Page({ params }: { params: { article: string } }) {
  const [content, setContent] = useState(<></>);
  const { data } = useSWR(
    `/markdown/ticket-guide-2024/${params.article}.mdx`,
    fetcher
  );

  const fetchMarkdown = async () => {
    console.log(data);
    const processed = await remark().use(html).process(data);
    console.log(processed);
    // setContent(processed.toString());
    // setContent(processed);
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
