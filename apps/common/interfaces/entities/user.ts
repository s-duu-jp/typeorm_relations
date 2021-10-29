import { Abstract } from './abstract';
import { Tag } from './tag';

/** Userインターフェイス */
export interface User extends Abstract {
  /** ID */
  id?: number;
  /** 名前 */
  name: string;
  /** 血液型 */
  tags?: Tag[];
}
