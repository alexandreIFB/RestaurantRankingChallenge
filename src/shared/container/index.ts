import { container } from "tsyringe";

import { RestaurantRepository } from "../../modules/Restaurant/repositories/implementation/RestaurantRepository";
import { IRestaurantRepository } from "../../modules/Restaurant/repositories/interfaces/IRestaurantRepository";

container.registerSingleton<IRestaurantRepository>(
  "RestaurantRepository",
  RestaurantRepository
);
