import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Jacket } from "./Jacket";
import { User } from "./User";

@Entity()
export class Delivery extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({type:'date'})
    deliveryDate: Date; 

    @ManyToOne(() => User, (user) => user.deliveries)
    user: User

    @ManyToOne(() => Jacket, (jacket) => jacket.deliveries)
    jacket: Jacket
}