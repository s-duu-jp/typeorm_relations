import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as entities from './entities';
import * as subscribers from './subscribers';
import * as migrations from './migrations';

const TypeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'demo',
  entities: Object.values(entities),
  subscribers: Object.values(subscribers),
  migrations: Object.values(migrations),
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV !== 'development',
  migrationsRun: true,
  cli: {
    entitiesDir: __dirname + '/entities',
    subscribersDir: __dirname + '/subscribers',
    migrationsDir: __dirname + '/migrations',
  },
};

export default TypeOrmOptions;
