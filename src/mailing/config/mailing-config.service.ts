import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailingConfigService {
  constructor(private readonly config: ConfigService) {}
  get host(): string {
    return this.config.getOrThrow('nodeMailer.host');
  }
  get port(): number {
    return Number(this.config.getOrThrow('nodeMailer.port'));
  }
  get user(): string {
    return this.config.getOrThrow('nodeMailer.user');
  }
  get pass(): string {
    return this.config.getOrThrow('nodeMailer.pass');
  }
  get logger(): boolean {
    return Boolean(this.config.getOrThrow('nodeMailer.logger'));
  }
  get debug(): string {
    return this.config.getOrThrow('nodeMailer.debug');
  }
  get emisor(): string {
    return this.config.getOrThrow('nodeMailer.emisor');
  }
}
