import { Customer } from "../../entities/Customer";

interface ICreateCustomerDTO {
  name: string;
  phone: string;
}

interface ICustomerRepository {
  create({ name, phone }: ICreateCustomerDTO): Promise<Customer>;
  findOneByID(id: string): Promise<Customer>;
  findOneByName(name: string): Promise<Customer>;
}

export { ICreateCustomerDTO, ICustomerRepository };
