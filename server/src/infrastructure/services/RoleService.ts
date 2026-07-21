import { Email } from "../../modules/auth/domain/valueObject/Email";

export class RoleService {

  public isAdmin(email: Email): boolean {
    const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(",").map((item) => item.trim()) : [];
    return adminEmails.includes(email.value);
  }
}
