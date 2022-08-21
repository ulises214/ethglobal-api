import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app/config/app-config.module';
import { AllExceptionsFilter } from './common/filters/all-exception';
import { WalletsModule } from './wallets/wallets.module';
import { Web3StorageModule } from './web3-storage/web3-storage.module';

@Module({
  imports: [WalletsModule, Web3StorageModule, AppConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
