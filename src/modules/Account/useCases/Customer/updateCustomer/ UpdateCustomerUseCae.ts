import { inject, injectable } from "tsyringe";

import { Customer } from "../../../entities/Customer";
import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

interface ICustomerUpdate {
  customer: Customer;
  name: string;
  phone: string;
}

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({ customer, name, phone }: ICustomerUpdate): Promise<void> {
    const customerUpdated = {
      id: customer.id,
      name,
      phone,
      created_at: customer.created_at,
    };

    await this.customerRepository.create(customerUpdated);
  }
}

export { UpdateCustomerUseCase };
