import { Router } from "express";

import { customerRoutes } from "./customer.routes";
import { restaurantRoutes } from "./restaurant.routes";

const router = Router();

router.use("/restaurants", restaurantRoutes);
router.use("/customers", customerRoutes);

export { router };
