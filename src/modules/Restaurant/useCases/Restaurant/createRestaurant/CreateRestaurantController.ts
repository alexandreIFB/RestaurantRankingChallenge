import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";

class CreateRestaurantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase);

    const { name, description, phone, address } = request.body;

    const restaurant = await createRestaurantUseCase.execute({
      name,
      description,
      phone,
      address,
    });

    return response.status(201).json(restaurant);
  }
}

export { CreateRestaurantController };
