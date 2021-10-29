import { Abstract } from './abstract';
import { BloodType } from './blood_type';

/** Userインターフェイス */
export interface User extends Abstract {
  /** ID */
  id?: number;
  /** 名前 */
  name: string;
  /** 血液型 */
  bloodType: BloodType;
}
