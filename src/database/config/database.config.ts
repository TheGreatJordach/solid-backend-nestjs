import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('database', () => ({
  url: process.env.DATASOURCE_URL,
}));
