import { Injectable } from '@nestjs/common';
import { NebuiaConfigService } from './config/nebuia-config.service';
import { NebuiaRepository } from './infrastructure/nebuia-repository';
import { GetNebuiaKeysResponse } from './responses';

@Injectable()
export class NebuiaService {
  constructor(
    private readonly config: NebuiaConfigService,
    private readonly nebuiaRepository: NebuiaRepository,
  ) {}
  getKeys(): GetNebuiaKeysResponse {
    return {
      apiKey: this.config.apiKey,
      apiSecret: this.config.apiSecret,
    };
  }
}
