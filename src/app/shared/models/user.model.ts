export class User {
  public active: number;
  public id: number;
  public email: string;
  // public password: string;
  public created_at: Date;
  public profile: object;

  constructor(user){
    this.active = user.active;
    this.id = user.id;
    this.email = user.email;
    // I don't think a password property is necessary in the user model
    // this.password = user.password;
    this.created_at = user.created_at || null;
    this.profile = user.profile;
  }
}
