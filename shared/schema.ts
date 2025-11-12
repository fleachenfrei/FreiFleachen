import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactFormSchema = z.object({
  name: z.string().min(2, "validation.nameMin"),
  email: z.string().email("validation.emailInvalid"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "validation.messageMin"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
