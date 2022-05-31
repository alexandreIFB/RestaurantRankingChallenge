import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { Customer } from "../../Account/entities/Customer";
import { Restaurant } from "./Restaurant";

@Entity()
class Review {
  @PrimaryColumn("uuid")
  @ManyToOne(() => Customer, (customer) => customer.reviews)
  customerId: Customer;

  @Column()
  stars: number;

  @Column()
  coment: string;

  @PrimaryColumn("uuid")
  @ManyToOne(() => Restaurant, (restaurant) => restaurant.reviews)
  restaurant: Restaurant;
}

export { Review };
