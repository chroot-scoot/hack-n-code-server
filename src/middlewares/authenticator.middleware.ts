import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../common/utils';
import { Unauthenticated } from '../errors/index';

export function authenticateRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = (req.headers.authorization ?? '').split(' ')[1];
  try {
    const payload = verifyToken(token);
    req.player = { ...payload };

    next();
  } catch {
    throw new Unauthenticated('Invalid or Missing Token');
  }
}
