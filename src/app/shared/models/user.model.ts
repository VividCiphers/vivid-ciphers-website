import { Role } from "app/shared/models/role.model";
import { Profile } from "app/shared/models/profile.model";


export class User {
  public active: number;
  public id: number;
  public email: string;
  public password: string;
  public created_at: Date;
  public profile: Profile;
  public roles: Role[];

  constructor(user?: any){
    this.active = user && user.active || null;
    this.id = user && user.id || null;
    this.email = user && user.email || null;
    this.created_at = user && user.created_at || null;
    this.profile = (user && user.profile) ?  new Profile({...user.profile}) : null;
    this.roles = user && user.roles.map((role) => {return new Role({...role});}) || [];
  }
}
