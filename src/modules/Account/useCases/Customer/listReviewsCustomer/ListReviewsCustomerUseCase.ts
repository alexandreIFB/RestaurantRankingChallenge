import { inject, injectable } from "tsyringe";

import { Customer } from "../../../entities/Customer";
import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

@injectable()
class ListReviewsCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}
  async execute(customer: Customer) {
    const customerWithReviews =
      await this.customerRepository.findOneWithReviews(customer.id);

    // reviews.map((review) => (review.stars = parseInt(review.stars)));

    // const reviewsSomado =
    //   reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;

    return customerWithReviews;
  }
}

export { ListReviewsCustomerUseCase };
