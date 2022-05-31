import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ICustomerRepository } from "../../../repositories/interfaces/ICustomerRespository";

interface ICustomerUpdate {
  id: string;
  name: string;
  phone: string;
}

function checkIfValidUUID(str) {
  // Regular expression to check if string is a valid UUID
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  return regexExp.test(str);
}

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({ id, name, phone }: ICustomerUpdate): Promise<void> {
    if (!checkIfValidUUID(id)) {
      throw new AppError("Customer With This ID Not Found", 409);
    }

    const customer = await this.customerRepository.findOneByID(id);

    if (!customer) {
      throw new AppError("Customer With This ID Not Found", 409);
    }

    customer.name = name;
    customer.phone = phone;

    await this.customerRepository.create(customer);
  }
}

export { UpdateCustomerUseCase };
