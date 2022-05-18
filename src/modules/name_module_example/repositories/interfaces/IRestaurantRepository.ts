import { Restaurant } from "../../model/Restaurant";

interface ICreateRestaurantDTO {
  name: string;
  description: string;
}

interface IRestaurantRepository {
  create({ name, description }: ICreateRestaurantDTO): Promise<void>;
  findOne(): Promise<Restaurant>;
}

export { IRestaurantRepository, ICreateRestaurantDTO };
