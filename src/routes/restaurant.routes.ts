import { Router } from "express";

import { CreateRestaurantController } from "../modules/Restaurant/useCases/Restaurant/createRestaurant/CreateRestaurantController";

const createRestaurantController = new CreateRestaurantController();

const restaurantRoutes = Router();

restaurantRoutes.post("", createRestaurantController.handle);

export { restaurantRoutes };
