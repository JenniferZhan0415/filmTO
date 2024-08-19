import React from "react";
import { Button } from "@nextui-org/react";
import useSWR from "swr";

import fetcher from "@/utils/fetcher";

export default function FestivalCalender({
  handleClick,
}: {
  handleClick: (month: string) => void;
}) {
  const { data: months } = useSWR("/api/festivals/months", {
    fetcher,
  });

  const [selectedMonth, setSelectedMonth] = React.useState<string>("August");

  return (
    <section className="mb-4 min-w-60 sm:min-w-80">
      <div className="flex gap-2 flex-wrap hover:cursor-pointer items-center justify-center mb-4">
        {months?.map(({ month }: { month: string }) => (
          <Button
            key={month}
            color="primary"
            radius="full"
            variant={month === selectedMonth ? "flat" : "ghost"}
            onClick={() => {
              handleClick(month);
              setSelectedMonth(month);
            }}
          >
            {month}
          </Button>
        ))}
      </div>
    </section>
  );
}
