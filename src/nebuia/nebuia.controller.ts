import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { CreateNebuiaReportFromCreditDTO } from './dto/CreateNebuiaReportFromCredit';
import { SendDownloadLinkDto } from './dto/SendDownloadLink.dto';
import { NebuiaService } from './nebuia.service';
import { GetNebuiaKeysResponse } from './responses';

@Controller('nebuia')
export class NebuiaController {
  constructor(private readonly nebuiaService: NebuiaService) {}

  @Get('keys')
  getKeys(): GetNebuiaKeysResponse {
    return this.nebuiaService.getKeys();
  }

  @Post('create/report')
  async createReportFromCredit(
    @Body() data: CreateNebuiaReportFromCreditDTO,
  ): Promise<boolean> {
    return true;
  }

  @Post('sendDownloadLink')
  @UseInterceptors(FileInterceptor('signature'))
  async sendDownloadLink(
    @Body() data: SendDownloadLinkDto,
    @UploadedFile() signature?: Express.Multer.File,
  ): Promise<void> {
    await this.nebuiaService.sendDownloadLink(data, signature?.buffer);
  }

  @Get('download/:reportCode')
  async downloadReport(
    @Param('reportCode') reportCode: string,
    @Res() res: Response,
  ): Promise<unknown> {
    const pdf = await this.nebuiaService.getReportPdf(reportCode);
    if (!pdf) return res.status(404).send('Report not found');
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=ReporteNebuIA.pdf',
      'Content-Length': pdf.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    return res.end(pdf);
  }
}
