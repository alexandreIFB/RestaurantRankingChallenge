import { inject, injectable } from "tsyringe";

import { IReviewRepository } from "../../../../Restaurant/repositories/interfaces/IReviewRepository";
import { Customer } from "../../../entities/Customer";

@injectable()
class ListReviewsCustomerUseCase {
  constructor(
    @inject("ReviewRepository")
    private reviewRepository: IReviewRepository
  ) {}
  async execute(customer: Customer) {
    const reviews = await this.reviewRepository.findReviewsByCustomerId(
      customer.id
    );

    return reviews;
  }
}

export { ListReviewsCustomerUseCase };
