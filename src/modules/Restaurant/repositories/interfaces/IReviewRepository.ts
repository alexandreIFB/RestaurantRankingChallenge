import { Customer } from "../../../Account/entities/Customer";
import { Restaurant } from "../../entities/Restaurant";
import { Review } from "../../entities/Review";

interface ICreateReviewsDTO {
  customer: Customer;
  restaurant: Restaurant;
  stars: number;
  comment: string;
}

interface IReviewRepository {
  create(newReview: ICreateReviewsDTO): Promise<Review>;
  findReviewsByCustomerId(id: string): Promise<Review[]>;
}

export { IReviewRepository, ICreateReviewsDTO };
