import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { log } from "./vite";
// Ensure all email-related imports are removed

export async function registerRoutes(app: Express): Promise<Server> {

  // --- Double check: This entire block MUST be removed or commented out ---
  /*
  let transporter: nodemailer.Transporter | null = null; // Or similar declaration
  try {
    // Check for required environment variables
    const emailHost = process.env.EMAIL_HOST;
    // ... rest of the transporter options and creation ...
    transporter = nodemailer.createTransport(...);
    await transporter.verify();
    log("Nodemailer transporter is ready...");
  } catch (err) {
    log(`Failed to create or verify Nodemailer transporter: ${err}`, 'error');
    console.error("Nodemailer setup error:", err);
    transporter = null;
  }
  */
  // --- End Double Check ---


  // put application routes here
  // ... (Existing non-contact routes, if any) ...

  // --- Ensure the /api/contact route handler is removed ---
  /*
  app.post("/api/contact", async (req, res) => {
    // ... (Removed route handler code) ...
  });
  */

  const httpServer = createServer(app);
  return httpServer;
}
