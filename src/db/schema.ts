import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
    id: text("id").primaryKey(),
    email: text("email"),
    clerkUserId: text("clerk_user_id").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
