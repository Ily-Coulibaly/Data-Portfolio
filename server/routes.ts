import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and return success
      console.log("New contact message:", contactMessage);
      
      res.json({ 
        success: true, 
        message: "Contact message received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          error: "Internal server error" 
        });
      }
    }
  });

  // Placeholder endpoint for resume download
  app.get("/api/resume", (req, res) => {
    // In a real application, this would serve the actual PDF file
    res.json({ message: "Resume download endpoint" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
