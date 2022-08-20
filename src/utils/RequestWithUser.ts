import { Request } from 'express';
export type RequestWithUser = Request & {
  user?: { userId: string; _id: string };
};
