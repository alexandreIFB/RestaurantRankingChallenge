import { injectable } from "tsyringe";

import { IRestaurantRepository } from "../../../repositories/interfaces/IRestaurantRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateRestaurantUseCase {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  execute({ name, description }: IRequest) {
    this.restaurantRepository.create({ name, description });
  }
}

export { CreateRestaurantUseCase };
