import { Role } from './Roles';

export enum Permissions {
  CreateOperator = 'create_operator',
  CreateAdmin = 'create_admin',
  CreateOwnCall = 'create_own_call',
  UpdateOwnCall = 'update_own_call',
}

export type PermissionsDef = {
  name: Role;
  permissions: { name: Permissions }[];
};
export const permissions: PermissionsDef[] = [
  {
    name: Role.ADMIN,
    permissions: [
      { name: Permissions.CreateAdmin },
      { name: Permissions.CreateOperator },
    ],
  },
  {
    name: Role.OPERATOR,
    permissions: [
      { name: Permissions.CreateOwnCall },
      { name: Permissions.UpdateOwnCall },
    ],
  },
  {
    name: Role.USER,
    permissions: [],
  },
];
