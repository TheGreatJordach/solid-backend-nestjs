import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import process from 'node:process';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(dotenv.config());

export default new DataSource({
  type: 'postgres',
  url: process.env.DATASOURCE_URL,
  entities: [User],
  migrations: ['src/database/migrations/*.js'],
  migrationsTableName: 'create_User_migration_table',
});
