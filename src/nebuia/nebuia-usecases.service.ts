import { Injectable } from '@nestjs/common';
import {
  CheckNebuiaCompleted,
  GetNebuiaKeys,
  GetNebuiaReportPdf,
  SendNebuiaDownloadLink,
  SignNebuiaReportAndSave,
} from './usecases';

@Injectable()
export class NebuiaUseCasesServices {
  constructor(
    public readonly checkReportCompleted: CheckNebuiaCompleted,
    public readonly getReportPdf: GetNebuiaReportPdf,
    public readonly sendDownloadLink: SendNebuiaDownloadLink,
    public readonly signReportAndSave: SignNebuiaReportAndSave,
    public readonly getKeys: GetNebuiaKeys,
  ) {}
}
