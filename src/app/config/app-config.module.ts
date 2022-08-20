import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './app-config';
import { AppConfigService } from './app-config.service';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('Cardmin Zoom Project'),
        APP_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        APP_URL: Joi.string().default(
          'https://videocall-services.herokuapp.com',
        ),
        APP_PORT: Joi.number().default(9000),
        APP_WEB_HOST: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
