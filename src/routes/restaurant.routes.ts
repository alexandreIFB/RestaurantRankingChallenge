import { Router } from "express";

import { CreateRestaurantController } from "../modules/name_module_example/useCases/Restaurant/createNameExample/CreateRestaurantController";

const createRestaurantController = new CreateRestaurantController();

const restaurantRoutes = Router();

restaurantRoutes.post("", createRestaurantController.handle);

export { restaurantRoutes };
