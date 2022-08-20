import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService {
  constructor(private readonly config: ConfigService) {}
  get url(): string {
    return this.config.getOrThrow('mongo.url');
  }
  get db(): string {
    return this.config.getOrThrow('mongo.db');
  }
}
