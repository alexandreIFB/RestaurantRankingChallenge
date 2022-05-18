import { container } from "tsyringe";

import { RestaurantRepository } from "../../modules/name_module_example/repositories/implementation/RestaurantRepository";
import { IRestaurantRepository } from "../../modules/name_module_example/repositories/interfaces/IRestaurantRepository";

container.registerSingleton<IRestaurantRepository>(
  "RestaurantRepository",
  RestaurantRepository
);
