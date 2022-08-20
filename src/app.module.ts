import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app/config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { AllExceptionsFilter } from './common/filters/all-exception';
import { MailingModule } from './mailing/mailing.module';
import { MongoConfigModule } from './mongo/mongo-config.module.';
import { MongoConfigService } from './mongo/mongo-config.service';
import { NebuiaModule } from './nebuia/nebuia.module';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [
    WalletsModule,
    NebuiaModule,
    AppConfigModule,
    MailingModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [MongoConfigModule],
      useFactory: async (mongoConfig: MongoConfigService) => ({
        uri: mongoConfig.url,
      }),
      inject: [MongoConfigService],
    }),
  ],
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
