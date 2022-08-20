import { Injectable } from '@nestjs/common';
import * as nodeMailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { AppConfigService } from '../app/config/app-config.service';
import { MailingConfigService } from './config/mailing-config.service';
import { NebuiaReportDownloadTemplate } from './templates/NebuiaReportDownloadTemplate';
@Injectable()
export class MailingService {
  private readonly transporter: Transporter;
  constructor(
    private readonly config: MailingConfigService,
    private readonly appConfig: AppConfigService,
  ) {
    const transporterOptions: nodeMailer.TransportOptions = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      host: this.config.host,
      port: this.config.port,
      auth: {
        user: this.config.user,
        pass: this.config.pass,
      },
      debug: this.config.debug,
    };
    this.transporter = nodeMailer.createTransport(transporterOptions);
  }
  async sendNebuiaPdfLink({
    to,
    downloadPath,
  }: {
    to: string;
    downloadPath: string;
  }): Promise<void> {
    await this.transporter.sendMail({
      from: this.config.emisor,
      to,
      subject: 'Nebuia - Descarga tu reporte',
      html: NebuiaReportDownloadTemplate(
        `${this.appConfig.url}${downloadPath}`,
      ),
    });
  }
}
