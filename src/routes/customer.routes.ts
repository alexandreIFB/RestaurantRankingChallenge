import { Router } from "express";

import { CreateCustomerController } from "../modules/Account/useCases/Customer/createCustomer/CreateCustomerController";
import { ListCustomersController } from "../modules/Account/useCases/Customer/listCustomers/ListCustomersController";
import { UpdateCustomerController } from "../modules/Account/useCases/Customer/updateCustomer/ UpdateCustomerController";

const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();

const customerRoutes = Router();

customerRoutes.post("", createCustomerController.handle);

customerRoutes.get("", listCustomersController.handle);

customerRoutes.put("/:id", updateCustomerController.handle);

export { customerRoutes };
