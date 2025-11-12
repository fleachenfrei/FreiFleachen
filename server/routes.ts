import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./email";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/", (req, res) => {
    const acceptLanguage = req.headers['accept-language'] || '';
    const preferredLang = acceptLanguage.toLowerCase().includes('en') ? 'en' : 'de';
    res.redirect(302, `/${preferredLang}`);
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await sendContactEmail(validatedData as ContactFormData);
      
      res.json({ 
        success: true, 
        message: "Ihre Anfrage wurde erfolgreich gesendet!" 
      });
    } catch (error) {
      console.error("Error sending contact email:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Ungültige Formulardaten",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
