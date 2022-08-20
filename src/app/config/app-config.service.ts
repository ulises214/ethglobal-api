import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
type EnvType = 'development' | 'production' | 'test';
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.getOrThrow('app.name');
  }
  get env(): EnvType {
    return this.configService.getOrThrow<EnvType>('app.env');
  }
  get url(): string {
    return this.configService.getOrThrow('app.url');
  }
  get port(): number {
    return Number(this.configService.get('app.port') ?? 9000);
  }
  get webHost(): string {
    return this.configService.getOrThrow('app.webHost');
  }
}
