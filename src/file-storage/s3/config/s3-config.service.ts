import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3ConfigService {
  constructor(private readonly configService: ConfigService) {}
  get url(): string {
    return this.configService.getOrThrow('s3.url');
  }
  get accessKeyId(): string {
    return this.configService.getOrThrow('s3.accessKeyId');
  }
  get secretAccessKey(): string {
    return this.configService.getOrThrow('s3.secretAccessKey');
  }
  get bucket(): string {
    return this.configService.getOrThrow('s3.bucket');
  }
  get secure(): boolean {
    return Boolean(this.configService.getOrThrow('s3.secure'));
  }
  get port(): number {
    return Number(this.configService.getOrThrow('s3.port'));
  }
}
