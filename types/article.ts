import type { articles } from "@/db/schemas/article";

export type Article = typeof articles.$inferSelect;

export default Article;
