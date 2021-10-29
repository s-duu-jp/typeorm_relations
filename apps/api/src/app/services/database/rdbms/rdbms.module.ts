import { Module } from '@nestjs/common';
import { BloodTypeEntityService } from './entities/blood_type.service';
import { UserEntityService } from './entities/user.service';

const services = [BloodTypeEntityService, UserEntityService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class RDBMSModule {}
