import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'node:process';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        url: process.env.DATASOURCE_URL,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
