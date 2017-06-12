
export class Profile {
  public first_name: string;
  public last_name: string;
  public biography: string;
  public country: string;
  public province: string;
  public city: string;
  public years_experience: number;
  public image_path: string;
  public image_text: string;

  constructor(profile?: any){

  this.first_name = profile && profile.first_name || null;
  this.last_name = profile && profile.last_name || null;
  this.biography = profile && profile.biography || null;
  this.country = profile && profile.country || null;
  this.province = profile && profile.province || null;
  this.city = profile && profile.city || null;
  this.years_experience = profile && profile.years_experience || null;
  this.image_path = profile && profile.image_path || null;
  this.image_text =profile && profile.image_text || null;
  }
}
