import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { Customer } from "../../Account/entities/Customer";
import { Restaurant } from "./Restaurant";

@Entity()
class Review {
  @PrimaryColumn("uuid")
  customerId?: string;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  customer: Customer;

  @Column()
  stars: number;

  @Column()
  comment: string;

  @PrimaryColumn("uuid")
  restaurantId?: string;

  @ManyToOne(() => Restaurant)
  restaurant: Restaurant;
}

export { Review };
