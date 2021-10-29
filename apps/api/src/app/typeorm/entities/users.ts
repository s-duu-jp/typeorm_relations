import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProfileEntity } from './profiles';
import { Profile, User } from 'apps/common/interfaces';

@Entity('Users')
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: Profile;
}
