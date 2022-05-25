import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCustomerUseCase } from "./ UpdateCustomerUseCae";

class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, phone } = request.body;

    const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

    const customer = await updateCustomerUseCase.execute({
      id,
      name,
      phone,
    });

    return response.status(200).json(customer);
  }
}

export { UpdateCustomerController };
