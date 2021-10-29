import { Module } from '@nestjs/common';
import { TagEntityService } from './entities/tag';
import { UserEntityService } from './entities/user.service';

const services = [TagEntityService, UserEntityService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class RDBMSModule {}
