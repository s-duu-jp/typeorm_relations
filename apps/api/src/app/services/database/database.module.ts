import { Module } from '@nestjs/common';
import { RDBMSModule } from './rdbms/rdbms.module';

const services = [RDBMSModule];

@Module({
  imports: [...services],
  exports: [...services],
})
export class DatabaseModule {}
