import { Repository } from "typeorm";

import { Restaurant } from "../../model/Restaurant";
import {
  ICreateRestaurantDTO,
  IRestaurantRepository,
} from "../interfaces/IRestaurantRepository";

class RestaurantRepository implements IRestaurantRepository {
  private repository: Repository<Restaurant>;

  async create(newRestaurant: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.repository.create(newRestaurant);

    await this.repository.save(restaurant);

    return restaurant;
  }
  async findOneByID(id: string): Promise<Restaurant> {
    const restaurant = await this.repository.findOne(id);

    return restaurant;
  }
}

export { RestaurantRepository };
