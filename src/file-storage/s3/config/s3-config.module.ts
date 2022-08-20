import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './s3-config';
import { S3ConfigService } from './s3-config.service';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        S3_URL: Joi.string().required(),
        S3_ACCESS_KEY_ID: Joi.string().required(),
        S3_SECRET_ACCESS_KEY: Joi.string().required(),
        S3_BUCKET: Joi.string().required(),
        S3_SECURE: Joi.boolean().required(),
        S3_PORT: Joi.number().required(),
      }),
    }),
  ],
  exports: [S3ConfigService],
  providers: [ConfigService, S3ConfigService],
})
export class S3ConfigModule {}
