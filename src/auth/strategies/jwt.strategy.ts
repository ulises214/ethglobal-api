import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConfigService } from '../config/auth-config.services';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: AuthConfigService) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request): string | null => {
          let data = request?.headers['authorization'];
          if (!data) {
            data = request?.cookies['jwt'];
            if (!data) return null;
          } else {
            data = data.split('Bearer ')[1];
          }
          return data;
        },
      ]),
    });
  }

  async validate(payload: { sub: string }): Promise<{ userId: string }> {
    return { userId: payload.sub };
  }
}
