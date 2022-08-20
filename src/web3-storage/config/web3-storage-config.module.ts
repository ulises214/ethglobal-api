import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './web3-storage-config';
import { Web3StorageConfigService } from './web3-storage-config.service';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      validationSchema: Joi.object({
        WEB3_STORAGE_TOKEN: Joi.string().required(),
      }),
    }),
  ],
  exports: [Web3StorageConfigService],
  providers: [Web3StorageConfigService],
})
export class Web3StorageConfigModule {}
