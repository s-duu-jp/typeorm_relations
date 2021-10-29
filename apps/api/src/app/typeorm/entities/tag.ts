import { Tag, User } from 'apps/common/interfaces';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from '.';

@Entity('Tags')
export class TagEntity implements Tag {
  @PrimaryColumn()
  type: string;

  @ManyToMany(() => UserEntity, (i) => i.tags)
  members?: User[];
}
