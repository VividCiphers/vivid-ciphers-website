/*
This is a testing version only of the projects service.
We can use this for development, but eventually these functions are going to
need to be rewritten as asynchronous with error handling.
*/
import { Injectable } from '@angular/core';
import { Project } from './project.model';

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
  
  getProject(id) {
    /*
    Takes one argument, id: string
    Returns the project with id or undefined if it doesn't exist.
    */
    function findProjectById(project) {
      return project.id === id;
    }
    return this.projects.find(findProjectById);
  }
  
  createProject(project) {
    /*
    Takes one argument, project: Project
    Creates the project, adds it to projects, and returns the created project.
    */
    const newProject = new Project(project);
    this.projects.push(newProject);
    return newProject;
  }
  
  deleteProject() {

  }
  
  updateProject() {

  }
}
