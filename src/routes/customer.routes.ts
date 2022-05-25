import { Router } from "express";

import { CreateCustomerController } from "../modules/Account/useCases/Customer/createCustomer/CreateCustomerController";
import { ListCustomersController } from "../modules/Account/useCases/Customer/listCustomers/ListCustomersController";

const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();

const customerRoutes = Router();

customerRoutes.post("", createCustomerController.handle);

customerRoutes.get("", listCustomersController.handle);

export { customerRoutes };
