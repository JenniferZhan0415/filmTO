CREATE TABLE IF NOT EXISTS "article" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(256) NOT NULL,
	"title" varchar(256) NOT NULL,
	"subtitle" varchar(256),
	"url" varchar(256),
	"image" text
);
