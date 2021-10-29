import { Injectable } from '@nestjs/common';
import {
  FindConditions,
  FindOneOptions,
  getRepository,
  InsertResult,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

abstract class AbstractRDBMSInterface {
  constructor(entity: Partial<AbstractRDBMSInterface>) {
    Object.assign(this, entity);
  }
}

@Injectable()
export abstract class AbstractRDBMSService<
  Entity extends AbstractRDBMSInterface
> {
  constructor(private entityName: string) {}

  /**
   * データ挿入(Create)
   */
  create(params: Entity | Entity[]): Promise<InsertResult> {
    return getRepository<Entity>(this.entityName).insert(params);
  }

  /**
   * データを1件だけ取得(Read)
   */
  findOne(options?: FindOneOptions<Entity>): Promise<Entity> {
    return getRepository<Entity>(this.entityName).findOne(options);
  }

  /**
   * データを取得(Read)
   */
  find(options?: FindOneOptions<Entity>): Promise<Entity[]> {
    return getRepository<Entity>(this.entityName).find(options);
  }

  /**
   * データ更新(Update)
   */
  update(
    beforParams: Entity,
    afterParams: QueryDeepPartialEntity<Entity>
  ): Promise<UpdateResult> {
    return getRepository<Entity>(this.entityName).update(
      beforParams,
      afterParams
    );
  }

  /**
   * データ削除(Delete)
   */
  delete(params: Entity): Promise<Entity> {
    return getRepository<Entity>(this.entityName).remove(params);
  }
}
