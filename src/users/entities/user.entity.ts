import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ unique: true })
    email: string;

  @Column()
    password: string;

  @Column()
    name: string;

  @Column()
    phone: string;

  @Column({ default: true })
    active: boolean;

  @Column({ default: false })
    manager: boolean;
}