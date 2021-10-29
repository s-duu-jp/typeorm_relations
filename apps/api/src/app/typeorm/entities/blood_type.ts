import { BloodType, BLOOD_TYPE } from 'apps/common/interfaces';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity('BloodTypes')
export class BloodTypeEntity implements BloodType {
  @PrimaryColumn('enum', { enum: BLOOD_TYPE })
  type: typeof BLOOD_TYPE[keyof typeof BLOOD_TYPE];
}
