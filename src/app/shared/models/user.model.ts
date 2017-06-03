import { Role } from "app/shared/models/role.model";

export class User {
  public active: number;
  public id: number;
  public email: string;
  public password: string;
  public created_at: Date;
  public profile: object;
  public roles: Role[];

  constructor(user?: any){
    this.active = user && user.active || null;
    this.id = user && user.id || null;
    this.email = user && user.email || null;
    this.created_at = user.created_at || null;
    this.profile = user && user.profile || null;
    this.roles = user && user.roles || [];
  }
}
