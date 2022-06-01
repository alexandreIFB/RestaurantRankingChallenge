import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "../../../../Account/repositories/interfaces/ICustomerRespository";
import { Review } from "../../../entities/Review";
import { IRestaurantRepository } from "../../../repositories/interfaces/IRestaurantRepository";
import { IReviewRepository } from "../../../repositories/interfaces/IReviewRepository";

interface IRequestReview {
  customer_id: string;
  restaurant_id: string;
  stars: number;
  comment: string;
}

@injectable()
class CreateReviewUseCase {
  constructor(
    @inject("RestaurantRepository")
    private restaurantRepository: IRestaurantRepository,
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository,
    @inject("ReviewRepository")
    private reviewRepository: IReviewRepository
  ) {}

  async execute({
    customer_id,
    restaurant_id,
    stars,
    comment,
  }: IRequestReview): Promise<Review> {
    const customer = await this.customerRepository.findOneByID(customer_id);
    const restaurant = await this.restaurantRepository.findOneByID(
      restaurant_id
    );

    const review = this.reviewRepository.create({
      customer,
      restaurant,
      stars,
      comment,
    });

    return review;
  }
}

export { CreateReviewUseCase };
