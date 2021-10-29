import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract';
import { BloodTypeEntity } from '.';
import { BloodType, User } from 'apps/common/interfaces';

@Entity('Users')
export class UserEntity extends AbstractEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BloodTypeEntity)
  bloodType: BloodType;
}
