import { db } from "./db";
import {
  sermons, events, ministries,
  type Sermon, type InsertSermon,
  type Event, type InsertEvent,
  type Ministry, type InsertMinistry
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getSermons(): Promise<Sermon[]>;
  getSermon(id: number): Promise<Sermon | undefined>;
  createSermon(sermon: InsertSermon): Promise<Sermon>;

  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;

  getMinistries(): Promise<Ministry[]>;
  createMinistry(ministry: InsertMinistry): Promise<Ministry>;
}

export class DatabaseStorage implements IStorage {
  async getSermons(): Promise<Sermon[]> {
    return await db.select().from(sermons).orderBy(desc(sermons.date));
  }

  async getSermon(id: number): Promise<Sermon | undefined> {
    const [sermon] = await db.select().from(sermons).where(eq(sermons.id, id));
    return sermon;
  }

  async createSermon(insertSermon: InsertSermon): Promise<Sermon> {
    const [sermon] = await db.insert(sermons).values(insertSermon).returning();
    return sermon;
  }

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(events.date);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }

  async getMinistries(): Promise<Ministry[]> {
    return await db.select().from(ministries);
  }

  async createMinistry(insertMinistry: InsertMinistry): Promise<Ministry> {
    const [ministry] = await db.insert(ministries).values(insertMinistry).returning();
    return ministry;
  }
}

export const storage = new DatabaseStorage();
