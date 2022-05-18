import { Restaurant } from "../../entities/Restaurant";

interface ICreateRestaurantDTO {
  name: string;
  description: string;
  phone: string;
  address: string;
}

interface IRestaurantRepository {
  create(newRestaurant: ICreateRestaurantDTO): Promise<Restaurant>;
  findOneByID(id: string): Promise<Restaurant>;
}

export { IRestaurantRepository, ICreateRestaurantDTO };
