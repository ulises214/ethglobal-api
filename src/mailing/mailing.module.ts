import { Module } from '@nestjs/common';
import { AppConfigModule } from '../app/config/app-config.module';
import { MailingConfigModule } from './config/mailing-config.module';
import { MailingService } from './mailing.service';

@Module({
  imports: [AppConfigModule, MailingConfigModule],
  providers: [MailingService],
  exports: [MailingService],
})
export class MailingModule {}
