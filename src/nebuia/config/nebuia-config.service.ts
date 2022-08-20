import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NebuiaConfigService {
  constructor(private readonly configService: ConfigService) {}
  get apiKey(): string {
    return this.configService.getOrThrow('nebuia.apiKey');
  }
  get apiSecret(): string {
    return this.configService.getOrThrow('nebuia.apiSecret');
  }
  get timeKey(): string {
    return this.configService.getOrThrow('nebuia.timeKey');
  }
}
