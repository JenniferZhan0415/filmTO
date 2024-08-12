import type { festivals } from "@/db/schemas/festival";

export type Festival = typeof festivals.$inferSelect;

export default Festival;
