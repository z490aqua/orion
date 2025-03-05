import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const constellationInfo = pgTable("constellation_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  meaning: text("meaning").notNull(),
  bayerLetters: text("bayer_letters").notNull(),
  location: text("location").notNull(),
  story: text("story").notNull(),
  family: text("family").notNull(),
  facts: jsonb("facts").notNull().$type<string[]>(),
  stars: jsonb("stars").notNull().$type<Array<{x: number, y: number, name: string, magnitude: number}>>()
});

export const insertConstellationSchema = createInsertSchema(constellationInfo);

export type InsertConstellation = z.infer<typeof insertConstellationSchema>;
export type Constellation = typeof constellationInfo.$inferSelect;
