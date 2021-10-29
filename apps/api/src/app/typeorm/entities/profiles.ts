import { Profile, User } from 'apps/common/interfaces';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserEntity } from '.';

@Entity('Profiles')
export class ProfileEntity implements Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  photo: string;
}
