/// <reference path="../../typings/tsd.d.ts" />
import { Http } from 'angular2/http';
import { Injectable } from 'angular2/angular2';
import { Project } from '../models/projects/projects'

@Injectable()
export class ProjectManager{
  public projects: any;

  constructor(http: Http) {
    this.projects = http.get("projects.json").map(res => res.json());
  }

  public addProject(project: Project) {
    this.projects.push(project);
  }
}
