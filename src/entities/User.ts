import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: Number;

    @Column({length: 50})
    firstname: String;

    @Column({length: 50})
    lastname: String;

    @Column("text")
    password: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}