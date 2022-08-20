import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UserWithRole } from '../utils/UserWithRole';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<UserWithRole | null> {
    const user = (await this.usersService.findOneByEmail(
      username,
    )) as UserWithRole;
    if (user.role?.name === 'user') {
      throw new BadRequestException('Usuario no autorizado');
    }
    if (!user) return null;
    if (user) {
      if (!user.password) {
        throw new BadRequestException('user without password');
      }
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        return user;
      }
    }
    return null;
  }

  async login(
    userId: string,
    names: string,
    email: string,
    role: string | undefined,
  ): Promise<string> {
    const payload = { sub: userId, names, email, role };
    return this.jwtService.sign(payload);
  }
}
