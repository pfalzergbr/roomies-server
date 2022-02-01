import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // address ref

  // user ref

  // finances ref

  // bulletin ref

  // shopping list ref

  // tasks ref
}