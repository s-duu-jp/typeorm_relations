import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmOptions from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmOptions)],
})
export class TypeormModule {}
