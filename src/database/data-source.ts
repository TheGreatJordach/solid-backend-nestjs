import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'THE-EMPLOYEES',
  port: 5434,
  entities: [User],
  migrations: ['src/database/migrations/*.js'],
  migrationsTableName: 'create_User_migration_table',
});
