import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'THE-EMPLOYEES',
      port: 5434,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
