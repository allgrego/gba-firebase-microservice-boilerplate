import {logger} from "firebase-functions";
import {Router} from "express";
import credentials from "../../config/credentials";
import randomRoutes from "./random";


const router = Router();

// Authentication Middleware for v1 routes
router.use((req, res, next) => {
  // Some global middleware
  next();
});

// Index
router.get("/", (req, res)=>res.json({
  name: "GBA Microservice App",
  description: "This is a GBA microservice API",
  version: "1.0.0",
}));

// "Random" routes
router.use("/random", randomRoutes);

export default router;
