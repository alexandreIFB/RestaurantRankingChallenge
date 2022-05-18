import { Restaurant } from "../../model/Restaurant";

interface ICreateRestaurantDTO {
  name: string;
  description: string;
  phone: string;
  adress: string;
}

interface IRestaurantRepository {
  create(newRestaurant: ICreateRestaurantDTO): Promise<Restaurant>;
  findOneByID(id: string): Promise<Restaurant>;
}

export { IRestaurantRepository, ICreateRestaurantDTO };
