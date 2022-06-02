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

  async findReviewsByCustomerId(id: string): Promise<Review[]> {
    // const reviews = await this.repository.find({
    //   where: { customerId: id },
    //   select: {
    //     customerId: true,
    //   },
    // });

    const values: Review[] = await this.repository
      .createQueryBuilder("review")
      .where({ customerId: id })
      .select([
        "review.restaurantId AS restaurantId",
        "review.stars AS stars",
        "review.comment AS comment",
      ])
      .execute();

    return values;
  }
}

export { ReviewRepository };
