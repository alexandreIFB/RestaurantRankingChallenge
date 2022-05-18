import { inject, injectable } from "tsyringe";

import { Restaurant } from "../../../entities/Restaurant";
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

  async execute(
    newRestaurantParams: ICreateRestaurantDTO
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.create(
      newRestaurantParams
    );

    return restaurant;
  }
}

export { CreateRestaurantUseCase };
