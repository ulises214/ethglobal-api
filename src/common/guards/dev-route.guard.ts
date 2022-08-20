import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/config/app-config.service';

@Injectable()
export class DevEndpointGuard implements CanActivate {
  constructor(private readonly appConfig: AppConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.appConfig.env === 'development') return true;
    throw new HttpException('Not found', 404);
  }
}
