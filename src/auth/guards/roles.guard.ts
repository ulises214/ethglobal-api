import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../common/decorators/roles.decorator';
import { Role } from '../../entities/User/Roles';
import { UsersService } from '../../users/users.service';
import { RequestWithUser } from '../../utils/RequestWithUser';
import { UserWithRole } from '../../utils/UserWithRole';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(UsersService) private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request: RequestWithUser = context.switchToHttp().getRequest();
    if (!request.user) return false;
    const user = await this.usersService.findOneById(request.user.userId);
    return requiredRoles.some(
      (role) => (user as UserWithRole).role?.name === role,
    );
  }
}
