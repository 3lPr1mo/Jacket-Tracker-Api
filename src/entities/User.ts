import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Delivery } from './Delivery'

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: Number;

    @Column({length: 50})
    firstname: String;

    @Column({length: 50})
    lastname: String;

    @OneToMany(() => Delivery, (delivery) => delivery.user)
    deliveries: Delivery[]

}