import { Module } from '@nestjs/common';
import { FileStorageModule } from '../file-storage/file-storage.module';
import { MailingModule } from '../mailing/mailing.module';
import { NebuiaConfigModule } from './config/nebuia-config.module';
import { NebuiaRepository } from './infrastructure/nebuia-repository';
import { NebuiaUseCasesServices } from './nebuia-usecases.service';
import {
  CheckNebuiaCompleted,
  GetNebuiaKeys,
  GetNebuiaReportPdf,
  SendNebuiaDownloadLink,
  SignNebuiaReportAndSave,
} from './usecases';

@Module({
  providers: [
    NebuiaUseCasesServices,
    CheckNebuiaCompleted,
    GetNebuiaReportPdf,
    SendNebuiaDownloadLink,
    SignNebuiaReportAndSave,
    GetNebuiaKeys,
    NebuiaRepository,
  ],
  exports: [NebuiaUseCasesServices],
  imports: [FileStorageModule, MailingModule, NebuiaConfigModule],
})
export class NebuiaUseCasesModule {}
