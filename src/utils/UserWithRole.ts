import { PermissionsDef } from '../entities/User/Permissions';
import { Role } from '../entities/User/Roles';
import { User } from '../entities/User/User.model';

export type UserWithRole = User & {
  role?: PermissionsDef;
  hasRole: (role: Role) => boolean;
  can: (permission: Permissions) => boolean;
};
