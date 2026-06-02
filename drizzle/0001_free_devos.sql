ALTER TABLE "profiles" DROP CONSTRAINT "profiles_clerk_user_id_unique";--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "first_name" text;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "last_name" text;--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "clerk_user_id";