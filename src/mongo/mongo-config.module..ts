import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './mongo-config';
import { MongoConfigService } from './mongo-config.service';
const ENV = process.env.NODE_ENV;

@Module({
  providers: [MongoConfigService],
  exports: [MongoConfigService],
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        MONGO_URL: Joi.string().required(),
        MONGO_DB_NAME: Joi.string().required(),
      }),
    }),
  ],
})
export class MongoConfigModule {}
