import type { cinemas } from "@/db/schemas/cinema";

export type Cinema = typeof cinemas.$inferSelect;

type FormattedCinema = Pick<Cinema, "lat" | "lng"> & {
  key: string;
};

export default FormattedCinema;
