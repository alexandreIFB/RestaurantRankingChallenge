import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
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
    const { name } = newRestaurantParams;

    const restaurantAlreadyExists =
      await this.restaurantRepository.findOneByName(name);

    if (restaurantAlreadyExists) {
      throw new AppError("Restaurant Already Exists", 409);
    }

    const restaurant = await this.restaurantRepository.create(
      newRestaurantParams
    );

    return restaurant;
  }
}

export { CreateRestaurantUseCase };
