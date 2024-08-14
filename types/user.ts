import type { users } from "@/db/schemas/user";

export type User = typeof users.$inferSelect;

export default User;
