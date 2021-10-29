import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../abstract.service';
import { TagEntity } from 'apps/api/src/app/typeorm/entities';
import { Tag } from 'apps/common/interfaces';

@Injectable()
export class TagEntityService extends AbstractRDBMSService<Tag> {
  constructor() {
    super(TagEntity.name);
  }
}
