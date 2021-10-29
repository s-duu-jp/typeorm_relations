import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AbstractEntity } from './abstract';
import { TagEntity } from '.';
import { Tag, User } from 'apps/common/interfaces';

@Entity('Users')
export class UserEntity extends AbstractEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => TagEntity, (i) => i.members)
  @JoinTable({ name: '_Users_Tags' })
  tags: Tag[];
}
