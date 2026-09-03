// Node modules imports
import express, { Application, NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

config(); // Dotenv configuration

const baseUrl: string = "/api/v1";
const port: number = Number(process.env.PORT) || 3030;

// Comma-separated list of allowed origins, e.g. "https://quitel23.site,https://www.quitel23.site"
const allowedOrigins: string[] = (
  process.env.CORS_ORIGIN || "https://quitel23.site"
) 
  .split(",")
  .map((origin) => origin.trim());

// Limit form submissions to prevent spam/abuse on public routes
const formsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later." },
});

//Routes imports
import preRegistration from "./src/routes/pre-registration.routes";
import registration from "./src/routes/registration.routes";
import abstract from "./src/routes/abstract.routes";

// Server setup
const app: Application = express();

// Express configuration
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use(baseUrl, formsLimiter, abstract); // Abstract route
app.use(baseUrl, formsLimiter, registration); // Registration route
app.use(baseUrl, formsLimiter, preRegistration); // Pre-registration route

// Redirect to website
app.get("*", (req: Request, res: Response) => {
  res.redirect("https://quitel23.site/");
});

// Centralized error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

// Connect to MongoDB, then start listening
connect(process.env.MONGODB as string)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((err: Error) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
