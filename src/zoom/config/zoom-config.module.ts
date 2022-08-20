import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import config from './zoom-config';
import { ZoomConfigService } from './zoom-config.service';
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        ZOOM_SDK_KEY: Joi.string().required(),
        ZOOM_SDK_SECRET: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, ZoomConfigService],
  exports: [ConfigService, ZoomConfigService],
})
export class ZoomConfigModule {}
