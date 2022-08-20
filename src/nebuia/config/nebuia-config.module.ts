import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import config from './nebuia-config';
import { NebuiaConfigService } from './nebuia-config.service';
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        NEBUIA_API_KEY: Joi.string().required(),
        NEBUIA_API_SECRET: Joi.string().required(),
        NEBUIA_TIME_KEY: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, NebuiaConfigService],
  exports: [NebuiaConfigService],
})
export class NebuiaConfigModule {}
