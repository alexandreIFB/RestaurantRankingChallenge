import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

interface ICustomerFormated {
  id: string;
  name: string;
  phone: string;
}

@injectable()
class ListCustomersUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute(): Promise<ICustomerFormated[]> {
    const customers = await this.customerRepository.findAll();

    const customersFormated = customers.map((customer) => {
      return {
        id: customer.id,
        name: customer.name,
        phone: customer.phone,
      };
    });

    return customersFormated;
  }
}

export { ListCustomersUseCase };
