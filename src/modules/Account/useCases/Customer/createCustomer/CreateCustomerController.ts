import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
  async handle(request: Request, reponse: Response) {
    const { name, phone } = request.body;

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    const customer = await createCustomerUseCase.execute({ name, phone });

    reponse.status(201).json(customer);
  }
}

export { CreateCustomerController };
