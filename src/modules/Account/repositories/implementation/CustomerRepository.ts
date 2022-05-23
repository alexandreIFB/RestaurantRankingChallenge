import { getRepository, Repository } from "typeorm";

import { Customer } from "../../entities/Customer";
import {
  ICreateCustomerDTO,
  ICustomerRepository,
} from "../interfaces/ICustomerRespository";

class CustomerRepository implements ICustomerRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({ name, phone }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.repository.create({ name, phone });

    await this.repository.save(customer);

    return customer;
  }
  async findOneByID(id: string): Promise<Customer> {
    const customer = await this.repository.findOne(id);

    return customer;
  }
  async findOneByName(name: string): Promise<Customer> {
    const customer = await this.repository.findOne({ name });

    return customer;
  }
}

export { CustomerRepository };
