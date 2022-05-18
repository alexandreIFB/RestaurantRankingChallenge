import { v4 as uuidV4 } from "uuid";

class Restaurant {
  id?: string;
  name: string;
  description: string;
  phone: string;
  adress: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Restaurant };
