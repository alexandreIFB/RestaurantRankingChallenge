import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCustomerUseCase } from "./ UpdateCustomerUseCae";

class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, phone } = request.body;
    const { customer } = request;

    const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

    await updateCustomerUseCase.execute({ customer, name, phone });

    return response.sendStatus(200);
  }
}

export { UpdateCustomerController };
