import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { CategoryJacket } from "./CategoryJacket";
import { Delivery } from "./Delivery"

@Entity()
export class Jacket extends BaseEntity{
    @PrimaryColumn()
    id: Number;
    
    @Column({nullable: true})
    description: string;

    @Column()
    size: string;

    @Column()
    price: number;

    @Column()
    quantityDeliveried: number;

    @Column()
    deliveryDate: Date;

    @OneToMany(() => Delivery, (delivery) => delivery.jacket)
    deliveries: Delivery[]

    @ManyToOne(() => CategoryJacket, (categoryJacket) => categoryJacket.jackets)
    jacketCategory: CategoryJacket;
}