import { User } from './user';

/** Tagインターフェイス */
export interface Tag {
  /** タグ */
  type: string;
  /** メンバー */
  members?: User[];
}
