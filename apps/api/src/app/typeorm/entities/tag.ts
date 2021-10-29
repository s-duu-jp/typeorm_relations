import { Tag } from 'apps/common/interfaces';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity('Tags')
export class TagEntity implements Tag {
  @PrimaryColumn()
  type: string;
}
