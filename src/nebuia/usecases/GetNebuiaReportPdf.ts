import { Inject, Injectable } from '@nestjs/common';
import {
  DomainException,
  SignedReportNotFoundException,
  UnknownException,
} from '../../common/domain/Exceptions';
import {
  FileStorageService,
  FileStorageServiceToken,
} from '../../file-storage/domain/FileStorage';

@Injectable()
export class GetNebuiaReportPdf {
  constructor(
    @Inject(FileStorageServiceToken)
    private readonly fileStorageService: FileStorageService,
  ) {}
  async execute(identifier: string): Promise<Buffer> {
    try {
      const file = await this.fileStorageService.download({
        identifier,
        type: 'report',
        extension: 'pdf',
      });
      if (!file) throw new SignedReportNotFoundException('Report not found');
      return file;
    } catch (error) {
      if (error instanceof DomainException) throw error;
      if (error instanceof Error)
        throw new UnknownException(error.stack ?? error.name, error.message);
      console.log(error);
      throw new SignedReportNotFoundException(String(error));
    }
  }
}
