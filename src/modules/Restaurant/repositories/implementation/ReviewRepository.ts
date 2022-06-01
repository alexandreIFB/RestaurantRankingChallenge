import { getRepository, Repository } from "typeorm";

import { Review } from "../../entities/Review";
import {
  ICreateReviewsDTO,
  IReviewRepository,
} from "../interfaces/IReviewRepository";

class ReviewRepository implements IReviewRepository {
  private repository: Repository<Review>;

  constructor() {
    this.repository = getRepository(Review);
  }

  async create(newReview: ICreateReviewsDTO): Promise<Review> {
    const review = this.repository.create(newReview);

    await this.repository.save(review);

    return review;
  }
}

export { ReviewRepository };
