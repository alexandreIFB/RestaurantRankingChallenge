/* eslint-disable @typescript-eslint/naming-convention */

import { Customer } from "../../modules/Account/entities/Customer";

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Express {
    interface Request {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      customer?: Customer;
    }
  }
}
