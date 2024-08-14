import { registerAs } from '@nestjs/config';
import * as process from 'node:process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('database', () => {
  const config = {
    type: 'postgres',
    url: process.env.DATASOURCE_URL,
    autoLoadEntities: true,
  } as const satisfies TypeOrmModuleOptions;
  return config;
});
