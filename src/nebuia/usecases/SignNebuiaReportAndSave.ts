import { Inject, Injectable } from '@nestjs/common';
import { UnknownNebuiaException } from '../../common/domain/Exceptions';
import { addSignatureToPdf } from '../../common/utils/pdf/add_signature';
import {
  FileStorageService,
  FileStorageServiceToken,
} from '../../file-storage/domain/FileStorage';
import { NebuiaRepository } from '../infrastructure/nebuia-repository';

@Injectable()
export class SignNebuiaReportAndSave {
  constructor(
    private readonly nebuiaRepository: NebuiaRepository,
    @Inject(FileStorageServiceToken)
    private readonly fileStorageService: FileStorageService,
  ) {}
  async execute(
    reportId: string,
    email: string,
    signature: Buffer,
  ): Promise<boolean> {
    const nebuiaPdf = await this.nebuiaRepository.getPDF(reportId);
    if (nebuiaPdf.status === false)
      throw new UnknownNebuiaException(nebuiaPdf.messages);
    const signedPdf = await addSignatureToPdf(nebuiaPdf.payload, signature);
    return await this.fileStorageService.upload({
      extension: 'pdf',
      file: signedPdf,
      identifier: email,
      type: 'report',
    });
  }
}
