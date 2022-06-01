import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Review } from "../../Restaurant/entities/Review";

@Entity()
class Customer {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Customer };
