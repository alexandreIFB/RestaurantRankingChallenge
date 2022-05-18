import { inject, injectable } from "tsyringe";

import {
  ICreateRestaurantDTO,
  IRestaurantRepository,
} from "../../../repositories/interfaces/IRestaurantRepository";

@injectable()
class CreateRestaurantUseCase {
  constructor(
    @inject("RestaurantRepository")
    private restaurantRepository: IRestaurantRepository
  ) {}

  execute(newRestaurantParams: ICreateRestaurantDTO) {
    this.restaurantRepository.create(newRestaurantParams);
  }
}

export { CreateRestaurantUseCase };
