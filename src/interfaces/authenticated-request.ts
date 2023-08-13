import { Request } from 'express';
export interface AuthenticatedRequest extends Request {
  user?: { firstname: string; id: number; email: string };
}
