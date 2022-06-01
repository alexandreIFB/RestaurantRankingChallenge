import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateReviewUseCase } from "./CreateReviewUseCase";

class CreateReviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { customerId: customer_id, stars, comment } = request.body;

    const createReviewUseCase = container.resolve(CreateReviewUseCase);

    const review = await createReviewUseCase.execute({
      customer_id,
      restaurant_id: id,
      stars,
      comment,
    });

    return response.status(200).json(review);
  }
}

export { CreateReviewController };
