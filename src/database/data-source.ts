import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'X-USERS',
  port: 5434,
  entities: [User],
  migrations: ['dist/database/migration/*.js'],
});
