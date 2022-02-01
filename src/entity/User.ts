import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn({ name: "created_at"})
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at"})
  updatedAt: string;
}
