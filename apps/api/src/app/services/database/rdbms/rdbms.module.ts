import { Module } from '@nestjs/common';
import { ProfileEntityService } from './entities/profile.service';
import { UserEntityService } from './entities/user.service';

const services = [ProfileEntityService, UserEntityService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class RDBMSModule {}
