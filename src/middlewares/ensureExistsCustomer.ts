import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { CustomerRepository } from "../modules/Account/repositories/implementation/CustomerRepository";

function checkIfValidUUID(str) {
  // Regular expression to check if string is a valid UUID
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  return regexExp.test(str);
}

export async function ensureExistsCustomer(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  const { id: customer_id } = request.params;

  if (!customer_id || !checkIfValidUUID(customer_id)) {
    throw new AppError("Customer With This ID Not Found", 409);
  }

  const customerRepository = new CustomerRepository();

  const customerExists = await customerRepository.findOneByID(customer_id);

  if (!customerExists) {
    throw new AppError("Customer With This ID Not Found", 409);
  }

  request.customer = customerExists;

  next();
}
