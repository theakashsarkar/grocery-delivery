import { Email } from "../valueObject/Email";
export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: Email,
    public readonly password: string,
  ) { }
}
