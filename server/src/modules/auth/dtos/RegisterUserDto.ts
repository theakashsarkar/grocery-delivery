import { Email } from "../domain/valueObject/Email";

export interface RegisterUserDto {
  name: Email,
  email: string,
  password: string
}
