import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../abstract.service';
import { ProfileEntity } from 'apps/api/src/app/typeorm/entities';
import { Profile } from 'apps/common/interfaces';

@Injectable()
export class ProfileEntityService extends AbstractRDBMSService<Profile> {
  constructor() {
    super(ProfileEntity.name);
  }
}
