import { Module } from '@nestjs/common';

import { ExampleController } from './controllers/example.controller';
import { ExampleControllerService } from './controllers/example.service';
import { ServicesModule } from './services/services.module';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [TypeormModule, ServicesModule],
  controllers: [ExampleController],
  providers: [ExampleControllerService],
})
export class AppModule {}
