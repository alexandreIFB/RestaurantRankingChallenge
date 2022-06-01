import { Router } from "express";

import { ensureExistsCustomer } from "../middlewares/ensureExistsCustomer";
import { CreateCustomerController } from "../modules/Account/useCases/Customer/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "../modules/Account/useCases/Customer/deleteCustomer/DeleteCustomerController";
import { ListCustomersController } from "../modules/Account/useCases/Customer/listCustomers/ListCustomersController";
import { ListReviewsCustomerController } from "../modules/Account/useCases/Customer/listReviewsCustomer/ListReviewsCustomerController";
import { UpdateCustomerController } from "../modules/Account/useCases/Customer/updateCustomer/ UpdateCustomerController";

const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const listReviewsCustomerController = new ListReviewsCustomerController();

const customerRoutes = Router();

customerRoutes.post("", createCustomerController.handle);

customerRoutes.get("", listCustomersController.handle);

customerRoutes.put(
  "/:id",
  ensureExistsCustomer,
  updateCustomerController.handle
);

customerRoutes.delete(
  "/:id",
  ensureExistsCustomer,
  deleteCustomerController.handle
);

customerRoutes.get(
  "/:id/reviews",
  ensureExistsCustomer,
  listReviewsCustomerController.handle
);

export { customerRoutes };
