import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AppConfigService } from '../app/config/app-config.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { RequestWithUser } from '../utils/RequestWithUser';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly appConfig: AppConfigService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Req() req: RequestWithUser,
    @Res() response: Response,
  ): Promise<Response> {
    const userId = req.user?._id;
    if (!userId) {
      return response.status(401).send();
    }
    const jwt = await this.usersService.generateSession(userId);
    return response
      .cookie('jwt', jwt, {
        httpOnly: true,
        domain: this.appConfig.webHost,
        secure: true, // set to true on production
        sameSite: true, // cookies some domain
        expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      })
      .send({ status: true, jwt });
  }
}
