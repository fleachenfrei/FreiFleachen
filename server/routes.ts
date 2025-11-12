import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./email";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export async function registerRoutes(app: Express): Promise<Server> {
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
