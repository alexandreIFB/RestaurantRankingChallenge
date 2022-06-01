import { Router } from "express";

import { CreateRestaurantController } from "../modules/Restaurant/useCases/Restaurant/createRestaurant/CreateRestaurantController";
import { CreateReviewController } from "../modules/Restaurant/useCases/Review/createReview/CreateReviewController";

const createRestaurantController = new CreateRestaurantController();
const createReviewController = new CreateReviewController();

const restaurantRoutes = Router();

restaurantRoutes.post("", createRestaurantController.handle);

restaurantRoutes.post("/:id/reviews", createReviewController.handle);

export { restaurantRoutes };
