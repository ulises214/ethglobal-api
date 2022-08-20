import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ZoomConfigService {
  constructor(private readonly configService: ConfigService) {}
  get key(): string {
    return this.configService.getOrThrow('zoom.sdkKey');
  }
  get secret(): string {
    return this.configService.getOrThrow('zoom.sdkSecret');
  }
}
