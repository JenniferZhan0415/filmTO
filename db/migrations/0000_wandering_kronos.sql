CREATE TABLE IF NOT EXISTS "cinema" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"address" varchar(256),
	"website" varchar(256),
	"description" text,
	"lat" real NOT NULL,
	"lng" real NOT NULL,
	"established" varchar(256),
	"image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "festival" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"month" varchar(256),
	"start" varchar(256),
	"end" varchar(256),
	"website" varchar(256),
	"since" varchar(256),
	"image" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "cinema" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "festival_index" ON "festival" USING btree ("name");