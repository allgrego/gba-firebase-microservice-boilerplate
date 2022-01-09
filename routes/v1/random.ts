// import {https, logger} from "firebase-functions";
import {Router} from "express";

const router = Router();

// Middleware that is specific for these routes
router.use((req, res, next)=>{
  // Cache data for 1 hour
  res.set("Cache-Control", "public, max-age=1800, s-maxage=3600");
  next();
});

/**
 * Greetings route
 * @param {queryParam} name: name to be displayed
 */
router.get("/", (req, res)=>{
  res.json({
    message: `Hi, ${req.query.name||"stranger"}!`
  })
});

export default router;
