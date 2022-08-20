import { Injectable } from '@nestjs/common';
import { NebuiaConfigService } from '../config/nebuia-config.service';
import { GetNebuiaKeysResponse } from '../responses';

@Injectable()
export class GetNebuiaKeys {
  constructor(private readonly config: NebuiaConfigService) {}
  execute(): GetNebuiaKeysResponse {
    return {
      apiKey: this.config.apiKey,
      apiSecret: this.config.apiSecret,
    };
  }
}
