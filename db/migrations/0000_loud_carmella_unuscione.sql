CREATE TABLE IF NOT EXISTS "cinema" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"address" varchar(256),
	"website" varchar(256),
	"description" text,
	"lat" real NOT NULL,
	"lng" real NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "cinema" USING btree ("name");