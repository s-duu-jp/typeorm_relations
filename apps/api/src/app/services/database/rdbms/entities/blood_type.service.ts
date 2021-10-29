import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../abstract.service';
import { BloodTypeEntity } from 'apps/api/src/app/typeorm/entities';
import { BloodType } from 'apps/common/interfaces';

@Injectable()
export class BloodTypeEntityService extends AbstractRDBMSService<BloodType> {
  constructor() {
    super(BloodTypeEntity.name);
  }
}
