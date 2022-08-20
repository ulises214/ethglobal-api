import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './mailing-config';
import { MailingConfigService } from './mailing-config.service';
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        NODE_MAILER_HOST: Joi.string().required(),
        NODE_MAILER_PORT: Joi.string().required(),
        NODE_MAILER_USER: Joi.string().required(),
        NODE_MAILER_PASS: Joi.string().required(),
        NODE_MAILER_LOGGER: Joi.string().required(),
        NODE_MAILER_DEBUG: Joi.string().required(),
        NODE_MAILER_EMISOR: Joi.string().required(),
      }),
    }),
  ],
  providers: [MailingConfigService],
  exports: [MailingConfigService],
})
export class MailingConfigModule {}
