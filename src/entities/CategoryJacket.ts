import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Jacket } from "./Jacket";

@Entity()
export class CategoryJacket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    type: string;

    @OneToMany(() => Jacket, jacket => jacket.jacketCategory)
    jackets: Jacket[]
}