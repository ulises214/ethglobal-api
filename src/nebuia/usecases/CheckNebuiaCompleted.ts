import { Injectable } from '@nestjs/common';
import { NebuiaReportNotFoundException } from '../../common/domain/Exceptions';
import { NebuiaRepository } from '../infrastructure/nebuia-repository';

@Injectable()
export class CheckNebuiaCompleted {
  constructor(private readonly nebuiaRepository: NebuiaRepository) {}
  async execute(report: string): Promise<boolean> {
    const response = await this.nebuiaRepository.getStepsFromReport(report);
    if (response.status === false)
      throw new NebuiaReportNotFoundException(response.messages);
    return response.payload.every((step) => step.status);
  }
}
