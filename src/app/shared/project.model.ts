export class Project {
  public id: string;
  public name: string;
  public description: string;
  public created: Date;
  public updated: Date;
  public active: boolean;

  constructor(project) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
    this.created = project.created;
    this.updated = project.updated;
    this.active = project.active;
  }
}
