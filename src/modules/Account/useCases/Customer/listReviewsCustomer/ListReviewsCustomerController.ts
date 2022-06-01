import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListReviewsCustomerUseCase } from "./ListReviewsCustomerUseCase";

class ListReviewsCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customer } = request;

    const listReviewsCustomerController = container.resolve(
      ListReviewsCustomerUseCase
    );

    const customerReviews = await listReviewsCustomerController.execute(
      customer
    );

    return response.status(200).json(customerReviews);
  }
}

export { ListReviewsCustomerController };
