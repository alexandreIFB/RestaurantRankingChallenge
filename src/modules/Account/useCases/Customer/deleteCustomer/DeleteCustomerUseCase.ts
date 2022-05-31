import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute(id: string) {
    await this.customerRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
