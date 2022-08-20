import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Web3StorageConfigService {
  constructor(private readonly configService: ConfigService) {}
  get token(): string {
    return this.configService.getOrThrow<string>('web3Storage.token');
  }
}
