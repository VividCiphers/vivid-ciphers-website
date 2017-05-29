/*
This is a testing version only of the projects service.
We can use this for development, but eventually these functions are going to
need to be rewritten as asynchronous with error handling.
*/
import { Injectable } from '@angular/core';
import { Project } from "app/shared/models/project.model";

@Injectable()
export class ProjectsService {
  // Dates for fake project data.
  created: Date = new Date();
  updated: Date = new Date();

  projects: Project[] = [
    new Project({ id: '123', name: 'Vivid Ciphers Rework', description: 'Rebuild website', created: this.created, updated: this.updated, active: true }),
    new Project({ id: '456', name: 'Social Media Project', description: 'Build social media app', created: this.created, updated: this.updated, active: true }),
    new Project({ id: '789', name: 'Chat App Project', description: 'Build a real time chat app', created: this.created, updated: this.updated, active: true }),
    new Project({ id: '101', name: 'SkyNet AI Project', description: 'AI for Cyberdyne Systems model 101', created: this.created, updated: this.updated, active: true })
  ];

  constructor() { }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    /*
    Takes one argument, id: string
    Returns the project with id or undefined if it doesn't exist.
    */
    return this.projects[this.getProjectIndexById(id)];
  }

  createProject(project: {}) {
    /*
    Takes one argument, project: Object;
    Creates the project, adds it to projects, and returns the created project.
    */
    const newProject = new Project(project);
    this.projects.push(newProject);
    return newProject;
  }

  deleteProjectById(id: string) {
    /*
    Takes one argument, id: string
    Removes project with id and returns it, or undefined if it doesn't exist.
    */
    const index: number = this.getProjectIndexById(id);
    if (index !== -1) {
      const deletedProject: Project = this.projects[index];
      this.projects.splice(index, 1);
      return deletedProject;
    }
    return undefined;
  }

  updateProjectById(id: string, propertyToUpdate: {}) {
    /*
    Takes two arguments, id: string, and propertyToUpdate: an object with the
    key, value pair of the property to update. ex. { name: 'new name' }
    Updates project with id and returns it, or undefined if it doesn't exist.
    */
    const index: number = this.getProjectIndexById(id);
    if (index === -1) return undefined;
    const keys = (Object.keys(propertyToUpdate));
    keys.forEach((key) => {
      this.projects[index][key] = propertyToUpdate[key];
    });
    return this.projects[index];
  }

  private getProjectIndexById = function(id: string) {
    /*
    Internal helper function for finding project indexes by their id. Not to
    be used outside of projects.service.
    */
    function findProjectById(project: Project) {
      return project.id === id;
    }
    return this.projects.findIndex(findProjectById);
  }
}
