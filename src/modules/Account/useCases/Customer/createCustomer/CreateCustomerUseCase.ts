import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { Customer } from "../../../entities/Customer";
import {
  ICreateCustomerDTO,
  ICustomerRepository,
} from "../../../repositories/interfaces/ICustomerRespository";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({ name, phone }: ICreateCustomerDTO): Promise<Customer> {
    const customerAlreadyExits = await this.customerRepository.findOneByName(
      name
    );

    if (customerAlreadyExits)
      throw new AppError("Customer Already Exists", 409);

    const customer = await this.customerRepository.create({ name, phone });

    return customer;
  }
}

export { CreateCustomerUseCase };
