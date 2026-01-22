import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingSermons = await storage.getSermons();
  if (existingSermons.length === 0) {
    await storage.createSermon({
      title: "Walking in Faith",
      preacher: "Pastor Perez Apha",
      date: new Date(),
      description: "A powerful message about trusting God in difficult times.",
      series: "Faith Series",
      videoUrl: "https://www.youtube.com/@GospelogyEden1/featured",
      imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600"
    });
    await storage.createSermon({
      title: "The Power of Prayer",
      preacher: "Pastor Jane Doe",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      description: "Understanding how prayer changes things.",
      series: "Prayer Series",
      imageUrl: "https://images.unsplash.com/photo-1445445290350-12a3b863b119?auto=format&fit=crop&q=80&w=1600"
    });
  }

  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    await storage.createEvent({
      title: "Sunday Service",
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      location: "Main Sanctuary",
      description: "Join us for a time of worship and the word.",
      imageUrl: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1600"
    });
    await storage.createEvent({
      title: "Bible Study",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      location: "Youth Hall",
      description: "A special night for young people to connect.",
      imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1600"
    });
  }

  const existingMinistries = await storage.getMinistries();
  if (existingMinistries.length === 0) {
    await storage.createMinistry({
      name: "Children's Ministry",
      description: "Nurturing the next generation in the ways of the Lord.",
      leader: "Pastor Calista",
      meetingTime: "Sundays 9:00 AM",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1600"
    });
    await storage.createMinistry({
      name: "Music Ministry",
      description: "Leading the congregation in praise and worship.",
      leader: "Brother Michael",
      meetingTime: "Thursdays 6:00 PM",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=1600"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.sermons.list.path, async (req, res) => {
    const sermons = await storage.getSermons();
    res.json(sermons);
  });

  app.get(api.sermons.get.path, async (req, res) => {
    const sermon = await storage.getSermon(Number(req.params.id));
    if (!sermon) {
      return res.status(404).json({ message: "Sermon not found" });
    }
    res.json(sermon);
  });

  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get(api.ministries.list.path, async (req, res) => {
    const ministries = await storage.getMinistries();
    res.json(ministries);
  });

  return httpServer;
}
