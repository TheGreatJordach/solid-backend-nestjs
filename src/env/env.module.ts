import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_VALIDATION_SHEMA } from './env.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      validationSchema: ENV_VALIDATION_SHEMA,
    }),
  ],
})
export class EnvModule {}
