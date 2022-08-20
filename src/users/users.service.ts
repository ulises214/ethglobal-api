import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { User, UserDocument } from '../entities/User/User.model';
import { UserWithRole } from '../utils/UserWithRole';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async findOneByEmail(email: string): Promise<UserWithRole | null> {
    return (await this.userModel
      .findOne({ 'email.email': email })
      .exec()) as UserWithRole | null;
  }
  async findOneById(id: string): Promise<UserWithRole | null> {
    const _id = new Types.ObjectId(id);
    return (await this.userModel
      .findOne({ _id: _id })
      .exec()) as UserWithRole | null;
  }
  async generateSession(userId: string): Promise<string> {
    const user = await this.findOneById(userId);
    if (!user) throw new UnauthorizedException();

    const jwt = await this.authService.login(
      userId,
      [user.first_name, user.last_name].join(' '),
      user.email,
      user.role?.name,
    );
    return jwt;
  }
}
