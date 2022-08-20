import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import {
  NetworkException,
  UnknownNebuiaException,
} from '../../common/domain/Exceptions';
import { NebuiaConfigService } from '../config/nebuia-config.service';
import { IKYC } from '../domain/IKYC';
import { NebuiaApiResponse } from '../domain/NebuiaApiResponse';
import { NebuiaStepStatus } from '../domain/NebuiaStepStatus';
import { NebuiaHttpClient } from './nebuia-http-client';

@Injectable()
export class NebuiaRepository extends NebuiaHttpClient {
  constructor(private readonly nebuiaConfig: NebuiaConfigService) {
    super({
      apiKey: nebuiaConfig.apiKey,
      secretKey: nebuiaConfig.apiSecret,
      timeKey: nebuiaConfig.timeKey,
    });
  }

  // api endpoint for check if report exist
  existReport(report: string): NebuiaApiResponse<IKYC> {
    try {
      return this.get('services/report', report);
    } catch (error) {
      if (error instanceof AxiosError)
        throw new NetworkException(error.message, 'Error de red');
      throw new UnknownNebuiaException(String(error));
    }
  }

  // api endpoint to get steps completed by report id
  async getStepsFromReport(
    report: string,
  ): NebuiaApiResponse<NebuiaStepStatus[]> {
    try {
      const response = await this.get<NebuiaStepStatus[]>(
        'services/steps',
        report,
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new NetworkException(error.message, 'Error de red');
      throw new UnknownNebuiaException(String(error));
    }
  }

  // get PDF file
  getPDF(report: string): NebuiaApiResponse<Buffer> {
    try {
      return this.document('services/pdf', report);
    } catch (error) {
      if (error instanceof AxiosError)
        throw new NetworkException(error.message, 'Error de red');
      throw new UnknownNebuiaException(String(error));
    }
  }
}
