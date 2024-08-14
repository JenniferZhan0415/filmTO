CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"theme" varchar(256) DEFAULT 'default',
	"image" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_index" ON "user" USING btree ("email");