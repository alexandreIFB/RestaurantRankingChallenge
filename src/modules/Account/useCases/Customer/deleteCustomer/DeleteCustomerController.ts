import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.customer;

    const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase);

    await deleteCustomerUseCase.execute(id);

    return response.sendStatus(200);
  }
}

export { DeleteCustomerController };
