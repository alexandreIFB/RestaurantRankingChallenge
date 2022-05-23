import { container } from "tsyringe";

import { CustomerRepository } from "../../modules/Account/repositories/implementation/CustomerRepository";
import { ICustomerRepository } from "../../modules/Account/repositories/interfaces/ICustomerRespository";
import { RestaurantRepository } from "../../modules/Restaurant/repositories/implementation/RestaurantRepository";
import { IRestaurantRepository } from "../../modules/Restaurant/repositories/interfaces/IRestaurantRepository";

container.registerSingleton<IRestaurantRepository>(
  "RestaurantRepository",
  RestaurantRepository
);

container.registerSingleton<ICustomerRepository>(
  "CustomerRepository",
  CustomerRepository
);
