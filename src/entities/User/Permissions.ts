import { Role } from './Roles';

export enum Permissions {
  CreateAdmin = 'create_admin',
}

export type PermissionsDef = {
  name: Role;
  permissions: { name: Permissions }[];
};
export const permissions: PermissionsDef[] = [
  {
    name: Role.ADMIN,
    permissions: [{ name: Permissions.CreateAdmin }],
  },
  {
    name: Role.USER,
    permissions: [],
  },
];
