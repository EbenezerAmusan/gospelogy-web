import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const sermons = pgTable("sermons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  preacher: text("preacher").notNull(),
  date: timestamp("date").notNull(),
  videoUrl: text("video_url"),
  description: text("description"),
  series: text("series"),
  imageUrl: text("image_url"),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
});

export const ministries = pgTable("ministries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  leader: text("leader"),
  meetingTime: text("meeting_time"),
  imageUrl: text("image_url"),
});

// Schemas
export const insertSermonSchema = createInsertSchema(sermons).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertMinistrySchema = createInsertSchema(ministries).omit({ id: true });

// Types
export type Sermon = typeof sermons.$inferSelect;
export type InsertSermon = z.infer<typeof insertSermonSchema>;

export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;

export type Ministry = typeof ministries.$inferSelect;
export type InsertMinistry = z.infer<typeof insertMinistrySchema>;
