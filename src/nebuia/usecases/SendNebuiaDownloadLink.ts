import { BadRequestException, Injectable } from '@nestjs/common';
import { NetworkException } from '../../common/domain/Exceptions';
import { MailingService } from '../../mailing/mailing.service';
import { NebuiaRepository } from '../infrastructure/nebuia-repository';
import { CheckNebuiaCompleted } from './CheckNebuiaCompleted';
import { SignNebuiaReportAndSave } from './SignNebuiaReportAndSave';

@Injectable()
export class SendNebuiaDownloadLink {
  constructor(
    private readonly nebuiaRepository: NebuiaRepository,
    private readonly mailingService: MailingService,
    private readonly checkNebuiaCompleted: CheckNebuiaCompleted,
    private readonly singPdfAndSave: SignNebuiaReportAndSave,
  ) {}
  async execute(reportId: string, signature: Buffer): Promise<void> {
    const completed = await this.checkNebuiaCompleted.execute(reportId);

    if (!completed) throw new BadRequestException('Report not completed yet');

    const report = await this.nebuiaRepository.existReport(reportId);
    if (report.status === false) throw new BadRequestException(report.messages);

    const result = await this.singPdfAndSave.execute(
      reportId,
      report.payload.email.email,
      signature,
    );
    if (!result)
      throw new NetworkException(
        'Error uploading file',
        'Error uploading file',
      );
    const email = report.payload.email;

    await this.mailingService.sendNebuiaPdfLink({
      downloadPath: `nebuia/download/${reportId}`,
      to: email.email,
    });
  }
}
