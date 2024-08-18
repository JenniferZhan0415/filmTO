import { Spinner } from "@nextui-org/react";

export default function Loading({ label = "Loading..." }: { label?: string }) {
  return <Spinner color="primary" label={label} labelColor="primary" />;
}
