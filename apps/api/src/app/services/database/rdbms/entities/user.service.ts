import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../abstract.service';
import { UserEntity } from 'apps/api/src/app/typeorm/entities';
import { User } from 'apps/common/interfaces';

@Injectable()
export class UserEntityService extends AbstractRDBMSService<User> {
  constructor() {
    super(UserEntity.name);
  }
}
