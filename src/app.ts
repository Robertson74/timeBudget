/**
 * @file app.ts - Main app configuration
 * @author Michael Robertson
 * @version 0.0.1
 */
import * as bodyParser from "body-parser";
import * as express from "express";
import { Router } from "express-serve-static-core/index";
import * as logger from "morgan";
import * as path from "path";

// Creates and configures an ExpressJS web server.
export class App {

  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we"ve got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    const router: Router = express.Router();
    // placeholder route handler
    router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);
  }

}
