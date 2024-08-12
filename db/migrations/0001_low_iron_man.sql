ALTER TABLE "cinema" ALTER COLUMN "image" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cinema" ADD COLUMN "year_established" varchar(256);