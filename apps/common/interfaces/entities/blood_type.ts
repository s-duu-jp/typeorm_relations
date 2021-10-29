/** 血液型 */
export const BLOOD_TYPE = {
  /** A型 */
  A: 'A型',
  /** B型 */
  B: 'B型',
  /** AB型 */
  AB: 'AB型',
  /** O型 */
  O: 'O型',
} as const;

/** BloodTypeインターフェイス */
export interface BloodType {
  /** 血液型 */
  type: typeof BLOOD_TYPE[keyof typeof BLOOD_TYPE];
}
