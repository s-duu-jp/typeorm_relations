import { Profile } from './profile';

/** Userインターフェイス */
export interface User {
  /** ID */
  id?: number;
  /** 名前 */
  name: string;
  /** プロフィール */
  profile: Profile;
}
