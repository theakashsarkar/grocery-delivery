import { Email } from "../domain/valueObject/Email";

export interface LoginUserDto {
  email: Email,
  password: string,
}
