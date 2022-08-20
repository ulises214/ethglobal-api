import { BadRequestException, Injectable } from '@nestjs/common';
import { NebuiaReportNotFoundException } from '../common/domain/Exceptions';
import { SendDownloadLinkDto } from './dto/SendDownloadLink.dto';
import { NebuiaRepository } from './infrastructure/nebuia-repository';
import { NebuiaUseCasesServices } from './nebuia-usecases.service';
import { GetNebuiaKeysResponse } from './responses';

@Injectable()
export class NebuiaService {
  constructor(
    private readonly useCasesService: NebuiaUseCasesServices,
    private readonly nebuiaRepository: NebuiaRepository,
  ) {}
  getKeys(): GetNebuiaKeysResponse {
    return this.useCasesService.getKeys.execute();
  }

  async getReportPdf(reportId: string): Promise<Buffer | undefined> {
    const email = await this.nebuiaRepository.existReport(reportId);
    if (!email.status) throw new NebuiaReportNotFoundException(email.messages);
    return this.useCasesService.getReportPdf.execute(email.payload.email.email);
  }
  async sendDownloadLink(
    data: SendDownloadLinkDto,
    signature?: Buffer,
  ): Promise<void> {
    if (!signature) throw new BadRequestException('Signature is required');
    await this.useCasesService.sendDownloadLink.execute(data.report, signature);
  }
}
