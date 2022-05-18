import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";

class CreateRestaurantController {
  handle(request: Request, response: Response): Response {
    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase);

    const { name, description } = request.body;

    createRestaurantUseCase.execute({ name, description });

    return response.sendStatus(201);
  }
}

export { CreateRestaurantController };
