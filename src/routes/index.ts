import "reflect-metadata";

import { Router } from "express";

import { restaurantRoutes } from "./restaurant.routes";

const router = Router();

router.use("restaurant", restaurantRoutes);

export { router };
