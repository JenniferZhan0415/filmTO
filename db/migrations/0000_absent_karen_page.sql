CREATE TABLE IF NOT EXISTS "cinema" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"address" varchar(256),
	"website" varchar(256),
	"description" text,
	"lat" real,
	"lng" real
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "cinema" USING btree ("name");