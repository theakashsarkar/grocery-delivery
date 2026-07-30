import { Request } from 'express'
import { DeliveryPartner } from '../../generated/prisma/client';
export interface IAuthUser {
  id: string,
  isAdmin?: boolean,
}
export interface IAuthRequest extends Request {
  user?: IAuthUser,
  partner?: Pick<DeliveryPartner, 'id'>
}
