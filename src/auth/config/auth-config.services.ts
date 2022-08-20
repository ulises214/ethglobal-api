import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  constructor(private readonly config: ConfigService) {}
  get jwtSecret(): string {
    return this.config.getOrThrow('auth.jwt.secret');
  }
  get jwtExpiresIn(): string {
    return this.config.getOrThrow('auth.jwt.expiresIn');
  }
}
