import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from 'src/app/config/app-config.module';
import { AuthModule } from '../auth/auth.module';
import { User, UserSchema } from '../entities/User/User.model';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    AppConfigModule,
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
