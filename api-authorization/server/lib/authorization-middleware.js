import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(req, res, next) {
  const auth = req.get('Authorization');
  if (!auth) {
    throw new ClientError(401, 'authentication required');
  }
  const token = auth.split('Bearer ')[1];
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = payload;
  next();
}
