CREATE TABLE IF NOT EXISTS "article" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(256) NOT NULL,
	"title" varchar(256) NOT NULL,
	"subtitle" varchar(256),
	"url" varchar(256),
	"image" text
);
--> statement-breakpoint
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
CREATE TABLE IF NOT EXISTS "film" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"year" varchar(256),
	"director" varchar(256),
	"is_predefined" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "like" (
	"id" serial PRIMARY KEY NOT NULL,
	"festival_id" integer,
	"cinema_id" integer,
	"article_id" integer,
	"film_id" integer,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" text,
	"theme" varchar(256) DEFAULT 'default',
	"image" text DEFAULT '/logo/icon.png'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "like" ADD CONSTRAINT "like_festival_id_festival_id_fk" FOREIGN KEY ("festival_id") REFERENCES "public"."festival"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "like" ADD CONSTRAINT "like_cinema_id_cinema_id_fk" FOREIGN KEY ("cinema_id") REFERENCES "public"."cinema"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "like" ADD CONSTRAINT "like_article_id_article_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."article"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "like" ADD CONSTRAINT "like_film_id_film_id_fk" FOREIGN KEY ("film_id") REFERENCES "public"."film"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "like" ADD CONSTRAINT "like_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "cinema" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "festival_index" ON "festival" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_index" ON "user" USING btree ("email");