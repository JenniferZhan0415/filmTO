import React from "react";
import { Button, Link } from "@nextui-org/react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function FestivalCalender({ handleClick }) {
  const { data: months } = useSWR("/api/festivals/months", {
    fetcher,
  });

  return (
    <section className="mb-4 min-w-60 sm:w-full">
      <div className="flex gap-2 flex-wrap hover:cursor-pointer items-center justify-center ">
        {months?.map(({ month }: { month: string }) => (
          <Button
            onClick={() => handleClick(month)}
            radius="full"
            variant="light"
            color="primary"
            key={month}
          >
            {month}
          </Button>
        ))}
      </div>
    </section>
  );
}
