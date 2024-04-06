import type { RequestUserProp } from '../types';
import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';
import { jwtTokenSecret, jwtTokenLifetime } from './config';

export function getHash(str: string) {
  return createHash('md5').update(str).digest('hex').slice(0, 32);
}

export function verifyToken(token: string): jwt.JwtPayload {
  return jwt.verify(token, jwtTokenSecret) as jwt.JwtPayload;
}

export function createToken(payload: RequestUserProp) {
  return jwt.sign(payload, jwtTokenSecret, {
    expiresIn: jwtTokenLifetime,
  });
}
