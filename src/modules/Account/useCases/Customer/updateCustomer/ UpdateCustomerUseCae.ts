import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

interface ICustomerFormated {
  name: string;
  phone: string;
}

interface ICustomerUpdate {
  id: string;
  name: string;
  phone: string;
}

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({
    id,
    name,
    phone,
  }: ICustomerUpdate): Promise<ICustomerFormated> {
    const customer = await this.customerRepository.findOneByID(id);

    if (!customer) {
      throw new AppError("Customer With This Name Not Found");
    }

    customer.name = name;
    customer.phone = phone;

    const customerUpdated = await this.customerRepository.create(customer);

    const customerFormated = {
      name: customerUpdated.name,
      phone: customerUpdated.phone,
    };

    return customerFormated;
  }
}

export { UpdateCustomerUseCase };
