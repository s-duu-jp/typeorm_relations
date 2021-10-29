import { BloodType, BLOOD_TYPE, User } from 'apps/common/interfaces';
import { Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from '.';

@Entity('BloodTypes')
export class BloodTypeEntity implements BloodType {
  @PrimaryColumn('enum', { enum: BLOOD_TYPE })
  type: typeof BLOOD_TYPE[keyof typeof BLOOD_TYPE];

  @OneToMany(() => UserEntity, (i) => i.bloodType)
  members?: User[];
}
